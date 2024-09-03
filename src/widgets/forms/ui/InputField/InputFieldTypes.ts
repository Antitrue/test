export type InputsTypes = {
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
