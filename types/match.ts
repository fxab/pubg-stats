// Core types
export interface Match {
  data: MatchData;
  included: (Participant | Roster)[];
  links: Links;
  meta: Record<string, unknown>;
}

export interface MatchData {
  type: string;
  id: string;
  attributes: MatchAttributes;
  relationships: MatchRelationships;
  links: Links;
}

export interface MatchAttributes {
  isCustomMatch: boolean;
  matchType: string;
  createdAt: string;
  stats: null;
  gameMode: string;
  titleId: string;
  tags: null;
  duration: number;
  shardId: string;
  mapName: string;
  seasonState: string;
}

export interface MatchRelationships {
  rosters: {
    data: RosterReference[];
  };
  assets: {
    data: AssetReference[];
  };
}

// Participant types
export interface Participant {
  type: "participant";
  id: string;
  attributes: ParticipantAttributes;
}

export interface ParticipantAttributes {
  stats: ParticipantStats;
  actor: string;
  shardId: string;
}

export interface ParticipantStats {
  DBNOs: number;
  assists: number;
  boosts: number;
  damageDealt: number;
  deathType: string;
  headshotKills: number;
  heals: number;
  killPlace: number;
  killStreaks: number;
  kills: number;
  longestKill: number;
  name: string;
  playerId: string;
  revives: number;
  rideDistance: number;
  roadKills: number;
  swimDistance: number;
  teamKills: number;
  timeSurvived: number;
  vehicleDestroys: number;
  walkDistance: number;
  weaponsAcquired: number;
  winPlace: number;
}

// Roster types
export interface Roster {
  type: "roster";
  id: string;
  attributes: RosterAttributes;
  relationships: RosterRelationships;
}

export interface RosterAttributes {
  stats: RosterStats;
  won: string;
  shardId: string;
}

export interface RosterStats {
  rank: number;
  teamId: number;
}

export interface RosterRelationships {
  team: {
    data: null;
  };
  participants: {
    data: ParticipantReference[];
  };
}

// Reference types
interface RosterReference {
  type: "roster";
  id: string;
}

interface ParticipantReference {
  type: "participant";
  id: string;
}

interface AssetReference {
  type: "asset";
  id: string;
}

interface Links {
  self: string;
  schema?: string;
}
