import { component$, useSignal } from "@builder.io/qwik";
import type { Match, Participant, Roster } from "../../../types/match";

interface MatchCardProps {
  match: Match;
}

export default component$((props: MatchCardProps) => {
  const isExpanded = useSignal(false);

  const getParticipantsByRoster = (rosterId: string): Participant[] => {
    const roster = props.match.data.relationships.rosters.data.find(
      (r) => r.id === rosterId
    );
    if (!roster) return [];

    const rosterData = props.match.included.find(
      (inc) => inc.type === "roster" && inc.id === roster.id
    ) as Roster;

    if (!rosterData) return [];

    return rosterData.relationships.participants.data
      .map((p) =>
        props.match.included.find(
          (inc) => inc.type === "participant" && inc.id === p.id
        )
      )
      .filter((p): p is Participant => p !== undefined);
  };

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div class="card bg-base-300 shadow-xl p-4 mb-4">
      <div
        class="flex justify-between items-center cursor-pointer"
        onClick$={() => (isExpanded.value = !isExpanded.value)}
      >
        <div>
          <h3 class="text-lg font-semibold">
            {props.match.data.attributes.gameMode} -{" "}
            {props.match.data.attributes.mapName}
          </h3>
          <p class="text-sm text-gray-600">
            Duration: {formatDuration(props.match.data.attributes.duration)}
          </p>
        </div>
        <div class="text-2xl">{isExpanded.value ? "−" : "+"}</div>
      </div>

      {isExpanded.value && (
        <div class="mt-4 pt-4">
          <h4 class="font-semibold mb-2">Teams</h4>
          <div class="space-y-2">
            {props.match.data.relationships.rosters.data
              .slice()
              .sort((a, b) => {
                const teamA = getParticipantsByRoster(a.id);
                const teamB = getParticipantsByRoster(b.id);

                return (
                  (teamA[0]?.attributes.stats.winPlace ?? 999) -
                  (teamB[0]?.attributes.stats.winPlace ?? 999)
                );
              })
              .map((roster) => {
                const participants = getParticipantsByRoster(roster.id);
                if (participants.length === 0) return null;

                return (
                  <div key={roster.id} class="border-l-4 border-blue-500 pl-2">
                    <div class="font-medium">
                      Team #{participants[0]?.attributes.stats.winPlace}
                    </div>
                    <div class="text-sm">
                      {participants.map((p) => (
                        <div key={p.id} class="flex justify-between">
                          <span>{p.attributes.stats.name}</span>
                          <span>
                            Kills: {p.attributes.stats.kills} | Damage:{" "}
                            {Math.round(p.attributes.stats.damageDealt)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
});
