import { Link } from 'react-router-dom';
import type { FormProps } from 'antd';
import { Button, Form, Input, DatePicker, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import AvatarTemplate from '../../../shared/assets/images/avatar-template.png';

import styles from './styles.module.scss';

type FieldType = {
  lastName?: string;
  firstName?: string;
  dataPicker?: string;
  discordId?: string;
  telegramId?: string;
  url?: string;
};

const ProfileForm = () => {
  const onFinish: FormProps<FieldType>['onFinish'] = values => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.wrapper}>
      <Link to={'#'} className={styles.buttonBack}>
        Back
      </Link>
      <section style={{ position: 'relative' }}>
        <div className={styles.avatar}>
          <Avatar
            src={AvatarTemplate}
            size={140}
            icon={<UserOutlined style={{ color: '#3A4045' }} />}
            className={styles.avatarImg}
          />
          <button className={`${styles.avatarBtn} ${styles.avatarBtn__left}`}></button>
          <button className={`${styles.avatarBtn} ${styles.avatarBtn__right}`}></button>
        </div>
        <Link to={'#'} className={styles.passwordLink}>
          Change Password
        </Link>
      </section>
      <Form
        name='basic'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='on'
        className={styles.form}>
        <div className={styles.inputs}>
          <Form.Item<FieldType>
            name='lastName'
            label='Last Name'
            rules={[
              { min: 3, message: 'Минимум 3 символа!' },
              { max: 20, message: 'Максимум 20 символов!' },
            ]}
            className={styles.input}>
            <Input placeholder='Last Name' />
          </Form.Item>

          <Form.Item<FieldType>
            name='firstName'
            label='First Name'
            rules={[
              { min: 3, message: 'Минимум 3 символа!' },
              { max: 20, message: 'Максимум 20 символов!' },
            ]}
            className={styles.input}>
            <Input placeholder='First Name' />
          </Form.Item>

          <Form.Item name={'dataPicker'} label='Date of birth' className={styles.input}>
            <DatePicker format={'DD.MM.YYYY'} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item<FieldType>
            name='discordId'
            label='Discord Id'
            rules={[
              { min: 3, message: 'Минимум 3 символа!' },
              { max: 20, message: 'Максимум 20 символов!' },
            ]}
            className={styles.input}>
            <Input placeholder='Discord Id' />
          </Form.Item>

          <Form.Item<FieldType>
            name='telegramId'
            label='Telegram Id'
            rules={[
              { min: 3, message: 'Минимум 3 символа!' },
              { max: 20, message: 'Максимум 20 символов!' },
            ]}
            className={styles.input}>
            <Input placeholder='Telegram Id' />
          </Form.Item>

          <Form.Item<FieldType>
            name='url'
            label='Avatar url'
            rules={[{ type: 'url', warningOnly: true, message: 'Некорректный url!' }]}
            className={styles.input}>
            <Input placeholder='Avatar URL' />
          </Form.Item>
        </div>
        <Form.Item>
          <Button type='primary' htmlType='submit' className={styles.button}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileForm;
