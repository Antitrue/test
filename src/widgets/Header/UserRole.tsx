import { Divider, Flex } from 'antd';
import { useState } from 'react';
import cn from 'classnames';

import styles from './UserRole.module.scss';
import { logoUserMini } from '../../shared/assets';

interface IUserRoleProps {
  hasNotifications: boolean;
  userRole: string;
}

function UserRole({ hasNotifications, userRole }: IUserRoleProps) {
  const [modalStatus, setModalStatus] = useState(false);

  const modalWindow = modalStatus ? (
    <Flex vertical className={styles.modal_window}>
      <a className={styles.modal_window__profile}>Profile</a>
      <button className={styles.modal_window__exit}>Выйти</button>
    </Flex>
  ) : null;

  const toggleModalWindow = () => {
    setModalStatus(modalStatus => {
      return !modalStatus;
    });
  };

  return (
    <div className={styles.layout}>
      <Flex vertical className={styles.container}>
        <Flex>
          <button className={cn(styles.notification_button, { [styles.has_notification]: hasNotifications })}></button>
          <Divider type='vertical' className={styles.divider} />
          <Flex vertical>
            <span className={styles.role_header}>Role</span>
            <span className={styles.user_role}>{userRole}</span>
          </Flex>
        </Flex>
        <Flex>
          <button className={styles.show_more_button} onClick={toggleModalWindow}></button>
          <img src={logoUserMini} alt='avatar' className={styles.avatar} />
        </Flex>
      </Flex>
      {modalWindow}
    </div>
  );
}

export default UserRole;
