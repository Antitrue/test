import { IUserUnfo } from './userInfoDTO';
import { IComment } from './userCommentDTO';

export type Topic = {
  id: number;
  title: string;
  content: string;
  creationDate: string;
  lastUpdateDate: string;
  topicStarter: IUserUnfo;
  commentDtoList: IComment[];
};

export type TopicsList = Topic[];

export type CreateTopic = {
  title: string;
  content: string;
};

export type addCommentToTopic = {
  topicId: string;
  body: string;
};

export type updateInfoFromTopic = {
  topicId: string;
  body: CreateTopic;
};
