import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchPlayerMatches, fetchPlayerStats } from "~/libs/pubgApi";

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
      <h1 class="text-3xl font-bold mb-4">Player Stats</h1>
      {playerStats.value ? (
        <pre class="bg-base-200 p-4 rounded">
          {JSON.stringify(playerStats.value, null, 2)}
        </pre>
      ) : (
        <p>Error loading player stats.</p>
      )}
      <h2 class="text-2xl font-bold mt-8 mb-4">Player Matches</h2>
      {playerMatches.value ? (
        <pre class="bg-base-200 p-4 rounded">
          {JSON.stringify(playerMatches.value, null, 2)}
        </pre>
      ) : (
        <p>Error loading player matches.</p>
      )}
    </div>
  );
});