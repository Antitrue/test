import cl from './PetInputFiled.module.scss';
import { useState } from 'react';
import Button from '../../ui/Button/Button';
import arrow from '../../../../shared/assets/images/arrow.svg';
import { FieldError, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface PetInputProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  elements?: string[];
  errors: FieldErrors;
}

const PetInputFiled = ({ name, type, label, placeholder, register, elements, errors }: PetInputProps) => {
  const [dropDown, setDropDown] = useState(false);
  const [selectValue, setSelectValue] = useState('');

  const toggleDropdown = () => setDropDown(prev => !prev);
  const changeSelectValue = (selectedItem: string) => {
    setSelectValue(selectedItem);
    setDropDown(false);
  };

  const errorMessage = errors[name] as FieldError | undefined;

  return (
    <label className={cl.inputContainer}>
      <p className={cl.fieldTitle}>{label}</p>
      {type === 'text' && name !== 'birthDay' && name !== 'weight' && (
        <input
          type='text'
          placeholder={placeholder}
          className={`${cl.input} ${errorMessage ? cl.invalidInput : ''}`}
          {...register(name, { required: 'Пожалуйста заполните это поле' })}
        />
      )}
      {type === 'select' && (
        <div className={cl.select}>
          <input
            type='text'
            className={`${cl.inputSelect} ${errorMessage && !selectValue ? cl.invalidInput : ''}`}
            placeholder={placeholder}
            readOnly
            value={selectValue}
            {...register(name, { required: 'Пожалуйста выберите значение' })}
          />
          {dropDown && (
            <div className={cl.types}>
              {elements!.map(item => (
                <span key={item} className={cl.typeAnimal} onClick={() => changeSelectValue(item)}>
                  {item}
                </span>
              ))}
            </div>
          )}
          <Button
            className={cl.arrow}
            type='button'
            tag={<img src={arrow} alt='select arrow' />}
            onClick={toggleDropdown}
          />
        </div>
      )}
      {type === 'url' && (
        <>
          <input
            type='url'
            placeholder={placeholder}
            className={`${cl.input} ${errorMessage ? cl.invalidInput : ''}`}
            {...register(name, {
              required: 'Пожалуйста заполните это поле',
              pattern: { value: /^(ftp|http|https):\/\/[^ "]+$/, message: 'Введите корректный url-адрес' },
            })}
          />
        </>
      )}
      {name === 'weight' && (
        <input
          type='text'
          placeholder={placeholder}
          className={`${cl.input} ${errorMessage ? cl.invalidInput : ''}`}
          {...register(name, {
            required: 'Пожалуйста заполните это поле',
            pattern: { value: /^[0-9]*$/, message: 'Введите только цифры' },
          })}
        />
      )}
      {name === 'birthDay' && (
        <>
          <input
            type='text'
            placeholder={placeholder}
            className={`${cl.input} ${errorMessage ? cl.invalidInput : ''}`}
            {...register(name, {
              required: true,
              pattern: {
                value: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{2}|\d{4})$/,
                message: 'Неверный формат даты',
              },
            })}
          />
        </>
      )}
      {type === 'textarea' && (
        <textarea
          className={`${cl.textArea} ${errorMessage ? cl.invalidInput : ''}`}
          placeholder={placeholder}
          {...register(name, { required: 'Пожалуйста заполните это поле' })}
        />
      )}
      {errorMessage && !selectValue && <span className={cl.errorMessage}>{errorMessage.message}</span>}
    </label>
  );
};

export default PetInputFiled;
