import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Answers from './Answers';
import QuestionAnalytics from './QuestionAnalytics';
import axios from 'axios';
import MarkdownView from 'react-showdown';
import AnswerForm from './AnswerForm';

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
            <p>
              {
                <MarkdownView
                  markdown={question.question}
                  options={{ tables: true, emoji: true }}
                />
              }
            </p>
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
