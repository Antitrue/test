export type DoctorDiagnosis = {
  id: number;
  petId: number;
  doctorId: number;
  description: string;
};

export type AddDiagnosis = {
  petId: number;
  body: string;
};
