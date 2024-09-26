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
      <div className={styles.container}>
        <h3 className={styles.head}>Добавить питомца</h3>
        <Button className={styles.close} tag={<img src={close} alt='Close' />} />
        <form
          className={styles.form}
          onSubmit={handleSubmit(data => {
            const translatedData = {
              ...data,
              petType: PetType[data.petType as keyof typeof PetType],
              gender: Gender[data.gender as keyof typeof Gender],
              size: Size[data.size as keyof typeof Size],
            };
            console.log(translatedData);
          })}>
          <label className={styles.textLabel}>
            <PetInputFiled
              name='name'
              type='text'
              label='Имя питомца*'
              placeholder='Имя'
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='petType'
              type='select'
              label='Тип питомца*'
              placeholder='Выберите тип питомца'
              elements={['Кошка', 'Собака', 'Хомяк']}
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='avatar'
              type='url'
              label='Аватар*'
              placeholder='avatarUrl'
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='birthDay'
              type='text'
              label='Дата рождения*'
              placeholder='дд.мм.гггг'
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='breed'
              type='select'
              label='Порода*'
              elements={['Вислоухая', 'Какая то порода', 'Какая то порода']}
              placeholder='Выберите породу'
              register={register}
              errors={errors}
            />
            <RadioField
              name='gender'
              elements={['Мужской', 'Женский']}
              label='Гендер*'
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='weight'
              type='text'
              label='Вес*'
              placeholder='Вес'
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='color'
              type='select'
              label='Цвет*'
              elements={['Рыжая', 'Черная', 'Белая']}
              placeholder='Выберите цвет'
              register={register}
              errors={errors}
            />
            <RadioField
              name='size'
              elements={['Маленький', 'Средний', 'Большой']}
              label='Размер*'
              register={register}
              errors={errors}
            />
            <PetInputFiled
              name='description'
              type='textarea'
              label='Описание'
              placeholder='Описание'
              register={register}
              errors={errors}
            />
          </label>
          * - Обязательно для заполнения
          <Button className={styles.create} description='Создать' type='submit' />
        </form>
      </div>
    </>
  );
};

export default NewPetForm;
