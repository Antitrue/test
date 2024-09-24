export type IVac = {
  id?: number;
  date: string;
  medicineId: number;
  medicineBatchNumber: string;
  isPeriodical: boolean;
  periodDays: number;
};
export type IUpdateProcedure = {
  id: number;
  body: IVac;
};
export type IAddProcedure = {
  petId: number;
  body: IVac;
};
