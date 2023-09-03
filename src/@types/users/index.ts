import { IStatusRequest } from '../request';

type IUser = {
  id: number;
  avatar_url: string;
};

type IUserState = IStatusRequest & IUser;

export type { IUser, IUserState };
