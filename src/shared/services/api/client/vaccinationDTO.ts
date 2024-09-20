export interface IVac {
  id?: number;
  date: string;
  medicineId: number;
  medicineBatchNumber: string;
  isPeriodical: boolean;
  periodDays: number;
}
export interface IUpdateProcedure {
  id: number;
  body: IVac;
}
export interface IAddProcedure {
  petId: number;
  body: IVac;
}
