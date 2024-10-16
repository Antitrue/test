export interface IDoctorDiagnosis {
  id: number;
  petId: number;
  doctorId: number;
  description: string;
}

export interface IAddDiagnosis {
  petId: number;
  body: string;
}
