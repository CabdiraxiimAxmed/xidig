import { FaPaperPlane } from 'react-icons/fa';
import Button from './Button';

const AddComment = () => {
  return (
    <form className="add-comment">
      <textarea
        name="comment"
        cols="20"
        rows="1"
        placeholder="ka dhiibo fikirkaaga"
      ></textarea>
      <Button text={<FaPaperPlane />} stylingClass="comment-btn" />
    </form>
  );
};

export default AddComment;
