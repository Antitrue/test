import styles from './styles.module.scss';

export default function Forum() {
  return (
    <div className={styles['wrapper-forum']}>
      <div className={styles['wrapper-title']}>
        <h1 className={styles.title}>Форум</h1>
      </div>
      <div className={styles['forum-list']}></div>
    </div>
  );
}
