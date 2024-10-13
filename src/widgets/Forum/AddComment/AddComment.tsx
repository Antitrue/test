import AddCommentForm from '../../forms/AddCommentForm/AddCommentForm';
import styles from './styles.module.scss';
import { logoUserMini } from '../../../shared/assets';
import { useAddCommentToTopicMutation } from '../../../shared/services/api/user/topic.api';

interface AddCommentProps {
  topicId: string;
}

function AddComment({ topicId }: AddCommentProps) {
  const [addComment, {}] = useAddCommentToTopicMutation();
  const handleAddComment = async (body: string) => {
    await addComment({ topicId, body }).unwrap();
  };
  return (
    <div className={styles.newComment}>
      <img src={logoUserMini} alt='avatar' className={styles.avatar} />
      <AddCommentForm handleAddComment={handleAddComment}></AddCommentForm>
    </div>
  );
}

export default AddComment;
