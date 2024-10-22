import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Likes from '../../Likes';

import styles from './card-comment.module.scss';

type CardCommentProps = {
  topic: {
    title: string;
    content: string;
    creationDate: string;
    topicStarter: {
      firstname: string;
      lastname: string;
    };
    commentDtoList: {
      likes: number;
      dislike: number;
    }[];
  };
}

const CardComment: React.FC<CardCommentProps> = ({ topic }) => {
  const { title, content, creationDate, topicStarter, commentDtoList } = topic;
  const firstComment = commentDtoList?.[0];

  return (
    <div className={styles.container}>
      <div className={styles.author}>
        <div className={styles.avatar}>
          <Avatar size={154} src={null} icon={<UserOutlined />} />
        </div>
        <div className={styles.nickname}>
          <Link to='#'>{`${topicStarter.firstname} ${topicStarter.lastname}`}</Link>
        </div>
        <div className={styles['triangle-left']}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.date}>{new Date(creationDate).toLocaleDateString()}</div>
        <hr className={styles.separator}></hr>
        <div className={styles.text}>
          <strong>{title}</strong>
          <p>{content}</p>
        </div>
        {firstComment && (
          <div className={styles.like}>
            <Likes isLike={true} count={firstComment.likes} />
            <Likes isLike={false} count={firstComment.dislike} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComment;
