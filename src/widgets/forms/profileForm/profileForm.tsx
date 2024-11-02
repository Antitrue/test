import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { FormProps } from 'antd';
import { Button, Form, Input, DatePicker, Avatar } from 'antd';
import { format, parseISO } from 'date-fns';
import { UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from '../../../shared/services/api/user/userProfile.api';
import { UserProfile } from '../../../shared/services/api/user/userProfileDTO';
import { avatarTemplate } from '../../../shared/assets';

import styles from './styles.module.scss';

const ProfileForm = () => {
  const [form] = Form.useForm();
  const { data: userProfile, isLoading } = useGetUserProfileQuery();
  const [updateUserProfile, { isLoading: isUpdating }] = useUpdateUserProfileMutation();

  useEffect(() => {
    if (userProfile) {
      form.setFieldsValue({
        ...userProfile,
        birthDate: userProfile.birthDate ? parseISO(userProfile.birthDate) : null,
      });
    }
  }, [userProfile, form]);

  const onFinish: FormProps<UserProfile>['onFinish'] = async values => {
    try {
      const formattedBirthDate = values.birthDate ? format(new Date(values.birthDate), 'yyyy-MM-dd') : '';
      await updateUserProfile({
        ...values,
        birthDate: formattedBirthDate,
      });
      console.log('Profile was update');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const onFinishFailed: FormProps<UserProfile>['onFinishFailed'] = errorInfo => {
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
            src={avatarTemplate}
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
        form={form}
        name='basic'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='on'
        className={styles.form}>
        <div className={styles.inputs}>
          <Form.Item<UserProfile>
            name='lastName'
            label='Last Name'
            rules={[
              { min: 3, message: 'Минимум 3 символа!' },
              { max: 20, message: 'Максимум 20 символов!' },
            ]}
            className={styles.input}>
            <Input placeholder='Last Name' />
          </Form.Item>

          <Form.Item<UserProfile>
            name='firstName'
            label='First Name'
            rules={[
              { min: 3, message: 'Минимум 3 символа!' },
              { max: 20, message: 'Максимум 20 символов!' },
            ]}
            className={styles.input}>
            <Input placeholder='First Name' />
          </Form.Item>

          <Form.Item<UserProfile>
            name='birthDate'
            label='Date of birth'
            className={styles.input}
            getValueProps={value => ({
              value: value ? dayjs(value) : '',
            })}>
            <DatePicker />
          </Form.Item>

          <Form.Item<UserProfile>
            name='discordId'
            label='Discord Id'
            rules={[
              { min: 3, message: 'Минимум 3 символа!' },
              { max: 20, message: 'Максимум 20 символов!' },
            ]}
            className={styles.input}>
            <Input placeholder='Discord Id' />
          </Form.Item>

          <Form.Item<UserProfile>
            name='telegramId'
            label='Telegram Id'
            rules={[
              { min: 3, message: 'Минимум 3 символа!' },
              { max: 20, message: 'Максимум 20 символов!' },
            ]}
            className={styles.input}>
            <Input placeholder='Telegram Id' />
          </Form.Item>

          <Form.Item<UserProfile>
            name='avatarUrl'
            label='Avatar url'
            rules={[{ type: 'url', warningOnly: true, message: 'Некорректный url!' }]}
            className={styles.input}>
            <Input placeholder='Avatar URL' />
          </Form.Item>
        </div>
        <Form.Item>
          <Button type='primary' htmlType='submit' className={styles.button} loading={isLoading || isUpdating}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileForm;
