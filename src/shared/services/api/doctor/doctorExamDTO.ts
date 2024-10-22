export type Exception = {
  message: string;
};

export type NewExam = {
  petId: number;
  body: Body;
};

export type UpdateExam = {
  examId: number;
  body: Body;
};

type Body = {
  weight: number;
  isCanMove: boolean;
  text: string;
};

export interface IGetExam extends Body {
  id: number;
  petId: number;
}
