export interface User {
  name: string;
  points: number;
  group: string;
  password?: string;
}

export interface Event {
  timestamp?: string;
  user: User;
  points: number;
  type: EventType;
  winner?: User;
  loser?: User;
}

export enum EventType {
  ADD = "ADD",
  DELETE = "DELETE",
  BET = "BET",
}

export interface Group {
  name: string;
  user: User[];
  points: number;
}
