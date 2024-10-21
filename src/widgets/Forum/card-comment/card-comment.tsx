import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Likes from '../../Likes';

import styles from './card-comment.module.scss';

const CardComment: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.author}>
        <div className={styles.avatar}>
          <Avatar size={154} src={null} icon={<UserOutlined />} />
        </div>
        <div className={styles.nickname}>
          <Link to='#'>Jack Cat</Link>
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
          <Likes isLike={true} count={1} />
          <Likes isLike={false} count={200} />
        </div>
      </div>
    </div>
  );
};

export default CardComment;
