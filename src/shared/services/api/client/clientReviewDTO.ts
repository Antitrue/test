import { IComment } from '../user/userCommentDTO';

export interface IClientReview {
  id: number;
  doctorId: number;
  review: IComment;
}
