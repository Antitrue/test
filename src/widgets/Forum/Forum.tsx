import styles from './styles.module.scss';

export default function Forum() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Форум</h2>
      </div>
      <div className={styles.body}>CardComment</div>
    </div>
  );
}
