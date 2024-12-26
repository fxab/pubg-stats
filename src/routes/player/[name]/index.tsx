import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchPlayerMatches, fetchPlayerStats } from "~/libs/pubgApi";
import PlayerComponent from "../../../components/player/player";
import MatchComponent from "../../../components/match/match";

export const usePlayerStats = routeLoader$(async (requestEvent) => {
  return fetchPlayerStats(requestEvent.params.name, requestEvent);
});

export const usePlayerMatches = routeLoader$(async (requestEvent) => {
  return fetchPlayerMatches(requestEvent.params.name, requestEvent);
});

export default component$(() => {
  const playerStats = usePlayerStats();
  const playerMatches = usePlayerMatches();

  return (
    <div class="container mx-auto p-4">
      <PlayerComponent playerData={playerStats.value} />
      {playerMatches.value && (
        <>
          <h2 class="text-2xl font-bold mt-8 mb-4">Player Matches</h2>
          <div class="space-y-4">
            {playerMatches.value.map((match) => (
              <MatchComponent key={match.data.id} match={match} />
            ))}
          </div>
        </>
      )}
    </div>
  );
});
