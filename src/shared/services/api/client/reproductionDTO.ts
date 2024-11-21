export type IReproduction = {
  id: number;
  estrusStart: string;
  mating: string;
  dueDate: string;
  childCount: number;
};
export type IReproductionIds = {
  petId: number;
  repId: number;
};
export type IAddRep = {
  petId: number;
  body: IReproduction;
};
export type IUpdateRep = {
  petId: number;
  repId: number;
  body: {
    estrusStart: string;
    mating: string;
    dueDate: string;
    childCount: number;
  };
};
