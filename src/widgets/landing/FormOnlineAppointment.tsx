import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import DoctorSVG from '../../shared/assets/images/doctorForForm.svg';
import fns from '../../shared/lib/helpers';

import styles from './form.module.scss';
import { useState } from 'react';

type FieldType = {
  username?: string;
  phoneNumber?: string;
  remember?: string;
};

const FormOnlineAppointment: React.FC = () => {
  const [checkbox, useCheckbox] = useState(false);
  const [error, useError] = useState(false);
  const onFinish: FormProps<FieldType>['onFinish'] = values => {
    checkbox ? console.log('Success:', values) : useError(true);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
    useError(true);
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.wrapper} id='appointment'>
      <div className={styles.formSection}>
        <article className={styles.article}>
          <h1 className={styles.title}>Остались вопросы?</h1>
          <p className={styles.paragraph}>Заполните форму и администратор свяжется с вами в течение 5 минут</p>
        </article>
        <section className={styles.formWrapper}>
          <img src={DoctorSVG} alt='doctor' className={styles.doctorImg} />
          <Form
            name='basic'
            className={styles.form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'>
            <h2 className={styles.form__title}>Введите ваши данные</h2>
            <Form.Item<FieldType>
              name='username'
              rules={[
                { required: true, message: 'Укажите Ваше имя!' },
                { min: 4, message: 'Минимум 4 символа!' },
                { max: 20, message: 'Максимум 20 символов!' },
              ]}>
              <Input placeholder='Укажите Ваше имя*' className={styles.input} />
            </Form.Item>

            <Form.Item<FieldType>
              name='phoneNumber'
              rules={[
                { required: true, message: 'Укажите Ваш телефон!' },
                { pattern: /\+?[0-9\s\-\(\)]+/, message: 'Недействительный номер!' },
                { min: 11, message: 'Минимум 11 символов!' },
                { max: 20, message: 'Максимум 20 символов!' },
              ]}>
              <Input placeholder='Укажите Ваш телефон*' className={styles.input} />
            </Form.Item>

            <Form.Item<FieldType> name='remember' valuePropName='checked'>
              <Checkbox
                className={error ? `${styles.checkbox} ${styles.error}` : styles.checkbox}
                checked={checkbox}
                onClick={() => {
                  if (!checkbox) useError(false);
                  useCheckbox(!checkbox);
                }}>
                Я согласен на обработку моих персональных данных{' '}
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit' className={styles.button}>
                {fns.FnToUpperCase('записаться онлайн')}
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    </div>
  );
};

export default FormOnlineAppointment;
