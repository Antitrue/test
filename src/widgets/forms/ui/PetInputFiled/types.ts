import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export type PetInputProps = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  elements?: string[];
  errors: FieldErrors;
};
