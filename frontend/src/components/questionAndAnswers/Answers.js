import AddComment from '../AddComment';
import Comment from '../Comment';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MarkdownView from 'react-showdown';
const Answers = ({ answers }) => {
  const newAnswer = useSelector(state => state.answer.value);
  const commentFromReducer = useSelector(state => state.comment.value);
  const [allAnswers, setAllAnswers] = useState(answers);
  useEffect(() => {
    if (commentFromReducer) {
      for (let answer of allAnswers) {
        if (answer._id) {
          if (answer._id === commentFromReducer.answerId) {
            answer.comments = [...answer.comments, commentFromReducer];
            setAllAnswers([...allAnswers]);
            break;
          }
        }
      }
    } else if (newAnswer) {
      if (newAnswer.hasOwnProperty('answer')) {
        setAllAnswers([...allAnswers, newAnswer]);
      }
    }
  }, [commentFromReducer, newAnswer]);
  return allAnswers.map(answer => (
    <>
      <div className="answer-container">
        <div>
          <div className="postedPerson">
            <img
              src="https://media.istockphoto.com/photos/young-woman-using-smart-phone-on-a-city-street-picture-id1301953709"
              alt="woman standing"
            />
            <p>{answer.username}</p>
          </div>
          <div className="answer">
            <p>
              {
                <MarkdownView
                  markdown={answer.answer}
                  options={{ tables: true, emoji: true }}
                />
              }
            </p>
          </div>
        </div>
      </div>
      {answer.comments.length && <Comment serverComment={answer.comments} />}
      {<AddComment answer_id={answer._id} />}
    </>
  ));
};

export default Answers;
