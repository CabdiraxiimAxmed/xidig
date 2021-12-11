import AddComment from '../AddComment';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Comment from '../Comment';
import Answers from './Answers';
import QuestionAnalytics from './QuestionAnalytics';
import axios from 'axios';

const Questions = () => {
  const { questionId } = useParams();
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    axios
      .get(`/suaal/${questionId}`)
      .then(response => setQuestion(response.data))
      .catch(e => console.log(e.message));
  }, []);
  return question ? (
    <div className="question-answer-container">
      <QuestionAnalytics />
      <div className="question-container">
        <div>
          <div className="postedPerson">
            <img
              src="https://media.istockphoto.com/photos/young-woman-using-smart-phone-on-a-city-street-picture-id1301953709"
              alt="woman standing"
            />
            <p>{question.username}</p>
          </div>
          <div className="question">
            <p>{question.question}</p>
          </div>
        </div>
      </div>
      <div className="main-answer-container">
        <Answers answers={question.answers} />
        <AddComment />
        <Comment />
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Questions;
