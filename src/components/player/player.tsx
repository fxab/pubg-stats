import { component$ } from "@builder.io/qwik";

interface PlayerAttributes {
  name: string;
  titleId: string;
  shardId: string;
  banType: string;
  clanId: string;
}

interface PlayerData {
  type: string;
  id: string;
  attributes: PlayerAttributes;
  relationships: {
    matches: {
      data: Array<{
        type: string;
        id: string;
      }>;
    };
  };
}

export interface PlayerResponse {
  data: PlayerData[];
}

interface PlayerProps {
  playerData: PlayerResponse;
}

export default component$<PlayerProps>(({ playerData }) => {
  if (!playerData || playerData.data.length === 0) {
    return (
      <div class="card w-96 bg-base-300 shadow-xl">
        <div class="card-body">
          <div class="card-title">
            <h2 class="text-2xl font-bold">Player Not Found</h2>
          </div>

          <div class="space-y-2 mt-4">
            <p class="text-base-content/70">
              This player doesn't exist or hasn't played any matches recently.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const player = playerData.data[0];
  const matchCount = player.relationships.matches.data.length;

  return (
    <div class="card w-96 bg-base-300 shadow-xl">
      <div class="card-body">
        {/* Player Header */}
        <div class="card-title flex justify-between">
          <h2 class="text-2xl font-bold">{player.attributes.name}</h2>
          <div class="badge badge-primary">{player.attributes.shardId}</div>
        </div>

        {/* Player Details */}
        <div class="space-y-2 mt-4">
          <div class="flex justify-between">
            <span class="text-base-content/70">Platform:</span>
            <span>{player.attributes.titleId}</span>
          </div>

          <div class="flex justify-between">
            <span class="text-base-content/70">Ban Status:</span>
            <span
              class={`badge ${
                player.attributes.banType === "Innocent"
                  ? "badge-success"
                  : "badge-error"
              }`}
            >
              {player.attributes.banType}
            </span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-base-content/70">Recent Matches:</span>
            <div class="badge badge-neutral">{matchCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
});
