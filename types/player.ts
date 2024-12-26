export interface PlayerProps {
  playerData: PlayerResponse;
}

export interface PlayerResponse {
  data: PlayerData[];
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
interface PlayerAttributes {
  name: string;
  titleId: string;
  shardId: string;
  banType: string;
  clanId: string;
}
