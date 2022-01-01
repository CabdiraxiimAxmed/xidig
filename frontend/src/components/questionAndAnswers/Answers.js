import AddComment from '../AddComment';
import Comment from '../Comment';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { clearAnswer } from '../../features/answer';
import { useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Button from '../Button';
import axios from 'axios';
const Answers = ({ answers }) => {
  const dispatch = useDispatch();
  const newAnswer = useSelector(state => state.answer.value);
  const commentFromReducer = useSelector(state => state.comment.value);
  const user = useSelector(state => state.user.value);
  const [allAnswers, setAllAnswers] = useState(answers);
  useEffect(() => {
    if (commentFromReducer) {
      for (let answer of allAnswers) {
        if (answer._id && commentFromReducer.comment) {
          if (answer._id === commentFromReducer.answerId) {
            answer.comments = [...answer.comments, commentFromReducer];
            setAllAnswers([...allAnswers]);
            break;
          }
        }
      }
    }
    if (newAnswer) {
      if (newAnswer.hasOwnProperty('answer')) {
        setAllAnswers([...allAnswers, newAnswer]);
        dispatch(clearAnswer());
      }
    }
  }, [commentFromReducer, newAnswer]);

  async function handleLikes(e, answerId) {
    let classname = e.target.className;
    let value = parseInt(e.target.textContent.slice(3));
    let isIncremented;
    if (classname.includes('liked')) {
      e.target.classList.remove('liked');
      e.target.textContent = `🤍 ${value - 1}`;
      isIncremented = false;
      value--;
    } else {
      e.target.textContent = `❤️ ${value + 1}`;
      value++;
      e.target.classList.add('liked');
      isIncremented = true;
    }
    const data = {
      likes: value,
      username: user.username,
      answerId,
      isIncremented,
    };
    try {
      await axios.post(`/suaal/${user.username}/likes`, data);
      console.log('we did it');
    } catch (e) {
      console.log(e.message);
    }
  }

  return allAnswers.map(answer => (
    <>
      <div className="answer-container">
        <Button
          text={`${answer.liked ? '❤️' : '🤍'} ${answer.likes}`}
          stylingClass={`like-btn ${answer.liked ? 'liked' : ''}`}
          handleClick={e => handleLikes(e, answer._id)}
        />

        <div>
          <div className="postedPerson">
            <img src={answer.avatar} alt="avatar" />
            <p>{answer.username}</p>
          </div>
          <div className="answer">
            <p>{<ReactMarkdown children={answer.answer} />}</p>
          </div>
        </div>
      </div>
      {answer.comments.length && <Comment serverComment={answer.comments} />}
      {<AddComment answer_id={answer._id} />}
    </>
  ));
};

export default Answers;
