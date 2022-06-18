export interface ITodo {
  id: string;
  text: string;
  status: boolean;
}

export enum FilterMode {
  All,
  Active,
  Completed,
}
