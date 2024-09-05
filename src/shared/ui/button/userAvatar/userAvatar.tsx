import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface props {
  size: number;
}

const UserAvatar: React.FC<props> = ({ size }) => {
  return <Avatar size={size} icon={<UserOutlined style={{ color: '#3A4045' }} />} style={{ background: 'white' }} />;
};

export default UserAvatar;
