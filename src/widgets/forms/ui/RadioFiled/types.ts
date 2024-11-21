import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export type RadioFieldProps = {
  name: string;
  elements: string[];
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};
