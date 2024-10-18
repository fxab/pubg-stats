import { component$, useSignal } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const playerName = useSignal("");

  return (
    <div class="text-center min-h-[300px]">
      <h1 class="text-4xl font-bold mb-4">
        Welcome to <span class="text-primary">PUBG Stats</span>
      </h1>
      <p class="mb-4">Enter a player name to see their stats:</p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Player Name"
          class="input input-bordered w-full max-w-xs"
          bind:value={playerName}
        />
        <Link href={`/player/${playerName.value}`} class="btn btn-primary">
          Search
        </Link>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "PUBG Stats",
  meta: [
    {
      name: "description",
      content: "View PUBG player statistics",
    },
  ],
};
