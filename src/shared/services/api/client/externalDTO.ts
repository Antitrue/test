export type IExternalPet = {
  id?: number;
  date: string;
  type: TypeProcedure;
  medicineId: number;
  medicineBatchNumber: string;
  isPeriodical: boolean;
  periodDays: number;
};

enum TypeProcedure {
  VACCINATION = 'VACCINATION',
  ECHINOCOCCUS = 'ECHINOCOCCUS',
  EXTERNAL_PARASITE = 'EXTERNAL PARASITE',
}
