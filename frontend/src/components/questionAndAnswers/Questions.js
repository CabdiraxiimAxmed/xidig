import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Answers from './Answers';
import QuestionAnalytics from './QuestionAnalytics';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import AnswerForm from './AnswerForm';
import { useSelector } from 'react-redux';

const Questions = () => {
  const { questionId } = useParams();
  const user = useSelector(state => state.user.value);
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    axios
      .get(`/suaal/clickedQuestion/${questionId}/${user.username}`)
      .then(response => setQuestion(response.data))
      .catch(e => console.log(e.message));
  }, []);
  return question ? (
    <div className="question-answer-container">
      <QuestionAnalytics answers={question.answers} />
      <div className="question-container">
        <div>
          <div className="postedPerson">
            <img src={question.avatar} alt="avatar " />
            <p>{question.username}</p>
          </div>
          <div className="question">
            <p>{<ReactMarkdown children={question.question} />}</p>
          </div>
        </div>
      </div>
      <div className="main-answer-container">
        <Answers answers={question.answers} />
      </div>
      <AnswerForm />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Questions;
