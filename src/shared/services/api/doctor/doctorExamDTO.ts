export interface IException {
  message: string;
}

export type INewExam = {
  petId: number;
  body: IBody;
};

export type IUpdateExam = {
  examId: number;
  body: IBody;
};

type IBody = {
  weight: number;
  isCanMove: boolean;
  text: string;
};

export interface IGetExam extends IBody {
  id: number;
  petId: number;
}
