import { IUserUnfo } from './userInfoDTO';

export interface IComment {
  id: number;
  content: string;
  dateTime: string;
  likes: number;
  dislike: number;
  userInfoDto: IUserUnfo;
}
