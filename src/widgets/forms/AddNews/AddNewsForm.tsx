import { useForm } from 'react-hook-form';
import Button from '../../../shared/ui/button/Button.tsx';
import PetInputFiled from '../ui/PetInputFiled/PetInputFiled.tsx';
import { close } from '../../../shared/assets/';
import { Checkbox } from 'antd';
import { Gender, PetType, Size } from '../NewPetForm/types.ts';

import styles from './AddNewsForm.module.scss';

const AddNewsForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={`${styles.container} ${Object.keys(errors).length ? styles.errorContainer : ''}`}>
        <h3 className={styles.head}>Добавить новость</h3>
        <Button className={styles.close} type='button'>
          <img src={close} alt='Close' />
        </Button>
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
            <div className={styles.groupFileld}>
              <PetInputFiled
                name='name'
                label='Заголовок*'
                placeholder='Имя'
                type='text'
                register={register}
                errors={errors}
              />
              <PetInputFiled
                name='newsType'
                label='Тип новости*'
                placeholder='Введите тип новости'
                type='select'
                elements={['Рекламные акции', 'Скидки', 'Продвижение', 'Обновление']}
                register={register}
                errors={errors}
              />
            </div>
            <PetInputFiled
              name='timer'
              label='Годно до*'
              placeholder='дд.мм.гггг'
              type='date'
              register={register}
              errors={errors}
            />

            <Checkbox className={styles.warnCheckbox}>Важная новость</Checkbox>
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
          <Button className={styles.create} type='submit'>
            Создать
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddNewsForm;
