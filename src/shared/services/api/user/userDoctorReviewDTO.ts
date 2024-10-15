import { IComment } from './userCommentDTO';

export interface IDoctorReview {
  id: number;
  doctorId: number;
  review: IComment;
}
