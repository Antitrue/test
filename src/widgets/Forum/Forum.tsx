import { useGetAllTopicsQuery } from '../../shared/services/api/user/topic.api';
import CardComment from './card-comment';
import styles from './styles.module.scss';

export default function Forum() {
  const { data: topics, isLoading, error } = useGetAllTopicsQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке топиков</div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Форум</h2>
      </div>
      <div className={styles.body}>
        {topics?.map((topic) => (
          <CardComment key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
