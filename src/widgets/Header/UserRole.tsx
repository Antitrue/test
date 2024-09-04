import { Divider, Flex } from 'antd';
import { useState } from 'react';

import styles from './UserRole.module.scss';
import avatar from '../../shared/assets/images/logo-user-mini.svg';

interface IUserRoleProps {
  hasNotifications: boolean;
  userRole: string;
}

function UserRole({ hasNotifications, userRole }: IUserRoleProps) {
  const [modalStatus, setModalStatus] = useState(false);

  const modalWindow = modalStatus ? (
    <Flex vertical className={styles.modal_window}>
      <button className={styles.modal_window__profile}>
        <span>Profile</span>
      </button>
      <button className={styles.modal_window__exit}>Выйти</button>
    </Flex>
  ) : null;

  const toggleModalWindow = () => {
    setModalStatus(modalStatus => {
      return !modalStatus;
    });
  };

  const bellClass = hasNotifications ? styles.has_notification : '';

  return (
    <div className={styles.layout}>
      <Flex vertical className={styles.container}>
        <Flex>
          <button className={styles.notification_button + ' ' + bellClass}></button>
          <Divider type='vertical' className={styles.divider} />
          <Flex vertical>
            <span className={styles.role_header}>Role</span>
            <span className={styles.user_role}>{userRole}</span>
          </Flex>
        </Flex>
        <Flex>
          <button className={styles.show_more_button} onClick={toggleModalWindow}></button>
          <img src={avatar} alt='avatar' className={styles.avatar} />
        </Flex>
      </Flex>
      {modalWindow}
    </div>
  );
}

export default UserRole;
