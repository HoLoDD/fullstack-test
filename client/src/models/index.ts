export interface IUser {
  id: number
  username: string;
  createdAt: Date;
  group: IGroup | null;
}

export interface IGroup {
  id: number;
  name: string;
  description: string;
  users: IUser[] | null;
}