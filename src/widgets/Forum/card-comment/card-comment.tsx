import { Avatar, Button } from 'antd';
import { UserOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';

import styles from './card-comment.module.scss';

const CardComment: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.author}>
        <div className={styles.avatar}>
          <Avatar size={154} src={null} icon={<UserOutlined />} />
        </div>
        <div className={styles.nickname}>
          <a href='#'>Jack Cat</a>
        </div>
        <div className={styles['triangle-left']}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.date}>13 сентября 2022</div>
        <hr className={styles.separator}></hr>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi veritatis molestias pariatur officiis.
          Cum illum unde suscipit enim tenetur quos laboriosam sint necessitatibus?
        </div>
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
      </div>
    </div>
  );
};

export default CardComment;
