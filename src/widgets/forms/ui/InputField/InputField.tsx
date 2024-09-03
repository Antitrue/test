import { useState } from 'react';
import { useFormContext, FieldError } from 'react-hook-form';

import { eyeEnabled, eyeDisabled } from '../../../../shared/assets/';

import { InputFieldProps } from './InputFieldTypes';
import styles from './InputField.module.scss';

export default function InputField({ type, name, label, placeholder, ...otherProps }: InputFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisability = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(showPassword => !showPassword);
  };

  const errorMessage = errors?.[name] as FieldError | undefined;

  return (
    <label className={styles.formLabel}>
      {label}
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        placeholder={placeholder}
        {...otherProps}
        className={`${styles.formInput} ${errorMessage ? styles.invalidInput : ''}`}
        {...register(name, {
          required: true,
        })}
      />
      {type === 'password' && (
        <button type='button' className={styles.formEye} onClick={togglePasswordVisability}>
          {showPassword ? <img src={eyeEnabled} alt='eyeEnabled' /> : <img src={eyeDisabled} alt='eyeDisabled' />}
        </button>
      )}
    </label>
  );
}
