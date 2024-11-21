import { IComment } from './userCommentDTO';

export type DoctorReview = {
  id: number;
  doctorId: number;
  review: IComment;
};
