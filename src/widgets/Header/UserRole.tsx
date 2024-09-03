import { Divider, Flex } from 'antd';
import { useState } from 'react';

import Class from './UserRole.module.scss';
import avatar from '../../shared/assets/images/logo-user-mini.svg';

interface IUserRoleProps {
  hasNotifications: boolean;
  userRole: string;
}

const UserRole: React.FC<IUserRoleProps> = ({ hasNotifications = true, userRole = 'Client' }) => {
  const [modalStatus, setModalStatus] = useState(false);

  const modalWindow = modalStatus ? (
    <Flex vertical className={Class.modal_window}>
      <button className={Class.modal_window__profile}>
        <span>Profile</span>
      </button>
      <button className={Class.modal_window__exit}>Выйти</button>
    </Flex>
  ) : null;

  const toggleModalWindow = () => {
    setModalStatus(modalStatus => {
      return !modalStatus;
    });
  };

  const bellClass = hasNotifications ? Class.has_notification : '';

  return (
    <>
      <Flex vertical className={Class.container}>
        <Flex>
          <button className={Class.notification_button + ' ' + bellClass}></button>
          <Divider type='vertical' className={Class.divider} />
          <Flex vertical>
            <span className={Class.role_header}>Role</span>
            <span className={Class.user_role}>{userRole}</span>
          </Flex>
        </Flex>
        <Flex>
          <button className={Class.show_more_button} onClick={toggleModalWindow}></button>
          <img src={avatar} alt='avatar' className={Class.avatar} />
        </Flex>
      </Flex>
      {modalWindow}
    </>
  );
};

export default UserRole;
