import styles from './NewPetForm.module.scss';
import { FC } from 'react';
import close from '../../../shared/assets/images/close.svg';
import PetInputFiled from '../ui/PetInputFiled/PetInputFiled.tsx';
import Button from '../ui/Button/Button.tsx';
import { useForm } from 'react-hook-form';
import RadioField from '../ui/RadioFiled/RadioField.tsx';

enum PetType {
  Кошка = 'CAT',
  Собака = 'DOG',
  Хомяк = 'HAMSTER',
}

enum Gender {
  Мужской = 'MALE',
  Женский = 'FEMALE',
}

enum Size {
  Маленький = 'SMALL',
  Средний = 'MEDIUM',
  Большой = 'LARGE',
}

const NewPetForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={`${styles.container} ${Object.keys(errors).length ? styles.errorContainer : ''}`}>
        <h3 className={styles.head}>Добавить питомца</h3>
        <Button className={styles.close} tag={<img src={close} alt='Close' />} />
        <form
          className={styles.form}
          onSubmit={handleSubmit(data => {
            const translatedData = {
              ...data,
              birthDay: data.birthDay.split('.').reverse().join('-'),
              petType: PetType[data.petType as keyof typeof PetType],
              gender: Gender[data.gender as keyof typeof Gender],
              size: Size[data.size as keyof typeof Size],
            };
            console.log(translatedData);
          })}>
          <div className={styles.fieldsContainer}>
            <PetInputFiled
              name='name'
              label='Имя питомца*'
              placeholder='Имя'
              type='text'
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='petType'
              label='Тип питомца*'
              placeholder='Выберите тип питомца'
              type='select'
              elements={['Кошка', 'Собака', 'Хомяк']}
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='avatar'
              label='Аватар*'
              placeholder='avatarUrl'
              type='url'
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='birthDay'
              label='Дата рождения*'
              placeholder='дд.мм.гггг'
              type='date'
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='breed'
              label='Порода*'
              placeholder='Выберите породу'
              elements={['Вислоухая', 'Какая-то порода...', 'Какая-то порода...']}
              type='select'
              register={register}
              errors={errors}
            />
            <RadioField
              name='gender'
              label='Гендер*'
              elements={['Мужской', 'Женский']}
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='weight'
              label='Вес*'
              placeholder='Вес'
              type='text'
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='color'
              label='Цвет*'
              placeholder='Выберите цвет'
              elements={['Рыжая', 'Черная', 'Белая']}
              type='select'
              register={register}
              errors={errors}
            />
            <RadioField
              name='size'
              label='Размер*'
              elements={['Маленький', 'Средний', 'Большой']}
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='description'
              label='Описание'
              placeholder='Описание'
              type='textarea'
              register={register}
              errors={errors}
            />
          </div>
          <p className={styles.required}>* - Обязательно для заполнения</p>
          <Button className={styles.create} description='Создать' type='submit' />
        </form>
      </div>
    </>
  );
};

export default NewPetForm;
