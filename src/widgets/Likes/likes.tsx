import { Button } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

import styles from './likes.module.scss';

type LikesProps = {
  isLike: boolean;
  count: number;
};

const Likes: React.FC<LikesProps> = ({ isLike, count }) => {
  return (
    <Button type='text'>
      {isLike ? <LikeOutlined className={styles.btnLike} /> : <DislikeOutlined className={styles.btnLike} />}
      <span>{count}</span>
    </Button>
  );
};

export default Likes;
