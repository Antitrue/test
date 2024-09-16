import { Button } from 'antd';
import fns from '../../../lib/helpers';

import styles from './styles.module.scss';

interface props {
  topic: string;
  articles: article[];
}

interface article {
  id: number;
  url: string;
  title: string;
  content: string;
  markEnabled?: boolean;
}

const NewsSection: React.FC<props> = ({ topic, articles }) => {
  const news = articles.map(el => {
    return (
      <li key={el.id} className={styles.listItem}>
        <img src={el.url} className={styles.img} />
        <h2 className={styles.title}>{el.title}</h2>
        <p className={styles.content}>{fns.FnSliceText(el.content, 94)}</p>
        {typeof el.markEnabled === 'boolean' && (
          <button
            className={
              el.markEnabled ? `${styles.mark} ${styles.markEnabled}` : `${styles.mark} ${styles.markDisabled}`
            }></button>
        )}
      </li>
    );
  });

  return (
    <section className={styles.section}>
      <h1 className={styles.topic}>{topic}</h1>
      <article className={styles.article}>
        <ul className={styles.list}>{news}</ul>
        <Button type='primary' className={styles.button}>
          Show more...
        </Button>
      </article>
    </section>
  );
};

export default NewsSection;
