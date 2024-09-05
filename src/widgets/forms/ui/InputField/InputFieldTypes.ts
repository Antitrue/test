export type InputsTypes = {
  full: string;
  email: string;
  password: string;
  isAgree: boolean;
};

export type InputFieldProps = {
  type: string;
  name: keyof InputsTypes;
  label: string;
  placeholder: string;
  [key: string]: string | boolean;
};
