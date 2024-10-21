import React from 'react';
import styles from './PostItem.module.scss';



type PostItemProps = {
  title: string;
  description: string;
  author: string;
  date: string;
  commentsCount: number;
}

const PostItem: React.FC<PostItemProps> = ({ title, description, author, date, commentsCount }) => {
  return (
    <div className={styles.postItem}>
    <div className={styles.content}>
      <a className={styles.title}>{title}Рыбные сухарики или мясные? Вот в чём вопрос</a>
      <div className={styles.description}>{description}Философские размышления и вечные споры</div>
    </div>
    <div className={styles.info}>
        <div className={styles.separator}></div>
        <div className={styles.author}>
          <div className={styles.avatar} />
          <span>{author}MeowMoew Cat</span>
        </div>
        <div className={styles.separator}></div>
        <div  className={styles.date}>
          <i className={styles.calendarIcon} />
          <span data-tooltip="13.09.2024 00:00">{date}13 сентября 00:00</span>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.comments}>
          <i className={styles.commentIcon} />
          <span>{commentsCount}1000+</span>
        </div>
    </div>
    </div>
  );
};

export default PostItem;
