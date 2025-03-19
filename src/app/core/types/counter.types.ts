export interface ScoresState {
  scores: Score[];
}

export interface Score {
  player: Player;
  score: number;
}

export interface Player {
  name: string;
  id: number;
}

export enum ViewType {
  ScoreCounter = 'scoreCounter',
  ScoreHistory = 'scoreHistory',
}
