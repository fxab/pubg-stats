import { RequestEventLoader } from "@builder.io/qwik-city";
import axios from "axios";

const getApiKey = (requestEvent: RequestEventLoader) => {
  const apiKey = requestEvent.env.get("PUBG_API_KEY");
  if (!apiKey) {
    throw new Error("PUBG API key not found");
  }
  return apiKey;
};

export const fetchPubgApi = async (
  url: string,
  requestEvent: RequestEventLoader
) => {
  const apiKey = getApiKey(requestEvent);
  try {
    const response = await axios.get(
      `https://api.pubg.com/shards/steam${url}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: "application/vnd.api+json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching PUBG API:", error);
    return null;
  }
};

export const fetchPlayerStats = (
  playerName: string,
  requestEvent: RequestEventLoader
) => {
  return fetchPubgApi(
    `/players?filter[playerNames]=${playerName}`,
    requestEvent
  );
};

export const fetchPlayerMatches = async (
  playerName: string,
  requestEvent: RequestEventLoader
) => {
  const player = await fetchPlayerStats(playerName, requestEvent);
  if (!player) return null;

  const matches = player.data[0].relationships.matches.data;
  const matchesToFetch = matches.slice(0, 10);

  const matchPromises = matchesToFetch.map((match: { id: string }) =>
    fetchPubgApi(`/matches/${match.id}`, requestEvent)
  );

  return Promise.all(matchPromises);
};
