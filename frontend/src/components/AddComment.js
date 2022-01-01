import { FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { comment as userComment, clearComment } from '../features/comment';
import Button from './Button';

const AddComment = ({ answer_id }) => {
  const user = useSelector(state => state.user.value);
  const dispatch = useDispatch();
  const [answerId, setId] = useState(answer_id);
  const { questionId } = useParams();
  const [comment, setComment] = useState('');
  function handleComment(e) {
    setComment(e.target.value);
  }
  async function sendComment(e) {
    e.preventDefault();
    // * sending data to the server.
    let data = { comment, answerId, username: user.username };
    try {
      await axios.post(`/suaal/${questionId}`, data);
      dispatch(userComment({ comment, answerId, username: user.username }));
      dispatch(clearComment());
      document.querySelector('.add-comment textarea').value = '';
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <form className="add-comment">
      <textarea
        name="comment"
        cols="20"
        rows="1"
        placeholder="ka dhiibo fikirkaaga"
        onChange={e => handleComment(e)}
      ></textarea>
      <Button
        text={<FaPaperPlane />}
        stylingClass="comment-btn"
        handleClick={e => sendComment(e)}
      />
    </form>
  );
};

export default AddComment;
