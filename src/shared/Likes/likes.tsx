import { Button } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

import styles from './likes.module.scss';

const Likes: React.FC = () => {
  return (
    <div className={styles.like}>
      <Button type='text'>
        <LikeOutlined className={styles.btnLike} />
        <span>12</span>
      </Button>
      <Button type='text'>
        <DislikeOutlined className={styles.btnLike} />
        <span>3</span>
      </Button>
    </div>
  );
};

export default Likes;
