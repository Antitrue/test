import cl from './PetInputFiled.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { PetInputProps } from './types.ts';
import { FieldError } from 'react-hook-form';

const PetInputFiled = ({ label, name, type, register, placeholder, elements, errors }: PetInputProps) => {
  const [selectValue, setSelectValue] = useState('');

  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    const handleResize = () => {
      if (type === 'date') {
        setInputType(window.innerWidth < 780 ? 'date' : 'text');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };

  const errorMessage = errors[name] as FieldError | undefined;

  return (
    <div className={cl.inputContainer}>
      <p className={cl.fieldTitle}>{label}</p>
      {type === 'text' && name !== 'birthDay' && name !== 'weight' && (
        <input
          type='text'
          placeholder={placeholder}
          className={`${cl.input} ${errorMessage ? cl.invalidInput : ''}`}
          {...register(name, {
            required: 'Пожалуйста заполните это поле',
            pattern: { value: /^[A-Za-zА-Яа-яЁё\s]+$/, message: 'В вашем имени не должно быть цифр' },
          })}
        />
      )}
      {type === 'select' && (
        <div className={cl.select}>
          <select
            style={{ color: selectValue ? '' : 'rgb(207 205 214)' }}
            className={`${cl.inputSelect} ${errorMessage && !selectValue ? cl.invalidInput : ''}`}
            value={selectValue}
            {...register(name, { required: 'Пожалуйста выберите значение', onChange: handleSelectChange })}>
            <option value='' disabled>
              {placeholder}
            </option>
            {elements!.map(item => (
              <option key={item} value={item} className={cl.typeAnimal}>
                {item}
              </option>
            ))}
          </select>
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
            validate: value => parseInt(value) <= 70 || 'Максимально возможное значение 70 кг',
          })}
        />
      )}
      {type === 'date' && (
        <>
          <input
            type={inputType}
            placeholder={placeholder}
            className={`${cl.input} ${errorMessage ? cl.invalidInput : ''}`}
            {...register(name, {
              required: 'Пожалуйста заполните это поле',
              pattern: {
                value: /^(?:\d{4}-\d{2}-\d{2}|(?:0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{2}|\d{4}))$/,
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
      {errorMessage && <span className={cl.errorMessage}>{errorMessage.message}</span>}
    </div>
  );
};

export default PetInputFiled;
