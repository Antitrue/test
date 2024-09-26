import cl from './RadioField.module.scss';
import { ReactNode } from 'react';
import { FieldError, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface RadioFieldProps {
  name: string;
  elements: string[];
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const RadioField = ({ name, elements, label, register, errors }: RadioFieldProps) => {
  const errorMessage = errors?.[name] as FieldError | undefined;
  return (
    <div className={cl.radioContainer}>
      <p className={cl.fieldTitle}> {label}</p>
      <div className={name === 'gender' ? '' : cl.sizeContainer}>
        {elements.map<ReactNode>(item => (
          <div key={item} className={name === 'gender' ? cl.genderContainer : cl.sizeContainer}>
            <label className={name === 'gender' ? cl.genderLabel : cl.sizeLabel}>
              <input
                type='radio'
                className={cl.radio}
                value={item}
                {...register(name, {
                  required: true,
                })}
              />
              <span className={`${cl.checkStyle} ${errorMessage ? cl.invalidRadio : ''}`}></span>
              <p>{item}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioField;
