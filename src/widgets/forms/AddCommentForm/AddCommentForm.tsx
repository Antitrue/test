import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

import styles from './AddCommentForm.module.scss';

type FieldType = {
  comment?: string;
};

interface AddCommentFormProps {
  handleAddComment: (comment: string) => void;
}

const AddCommentForm = ({ handleAddComment }: AddCommentFormProps) => {
  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>['onFinish'] = values => {
    if (values.comment?.trim()) {
      handleAddComment(values.comment.trim());
      form.resetFields();
    }
  };

  return (
    <div className={styles.wrapper}>
      <Form form={form} name='basic' layout='vertical' onFinish={onFinish} autoComplete='off' className={styles.form}>
        <Form.Item<FieldType> name='comment'>
          <Input.TextArea placeholder='Add a comment...' className={styles.input} />
        </Form.Item>
        <Form.Item className={styles.inputContainer}>
          <Button type='primary' htmlType='submit' className={styles.button}>
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCommentForm;
