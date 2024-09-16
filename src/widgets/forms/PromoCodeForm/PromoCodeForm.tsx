import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import InputField from '../ui/InputField/InputField';
import Button from '../../../shared/ui/button/Button';
import Modal from '../../../shared/ui/Modal/Modal';

import styles from './PromoCodeForm.module.scss';

function PromoCodeForm() {
  const [modalIsOpen, setModalIsoOpen] = useState(JSON.parse(sessionStorage.getItem('modalIsOpen') || 'true'));
  const closeModal = () => setModalIsoOpen(false);

  const methods = useForm({
    defaultValues: {
      email: '',
    },
  });

  return (
    <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <FormProvider {...methods}>
        <form className={styles.form}>
          <InputField
            type='email'
            name='email'
            label='Введите email для получения промокода'
            placeholder='email'
            className={styles.labelStyle}
          />
          <Button type='submit' children='Отправить' className={styles.formSubmitBtn} />
        </form>
      </FormProvider>
    </Modal>
  );
}

export default PromoCodeForm;
