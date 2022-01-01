import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
const QuestionLinks = ({ formData }) => {
  const user = useSelector(state => state.user.value);
  return (
    <>
      {formData.map(question => (
        <div key={question._id} className="question-link-container">
          <div className="posted-user">
            <img src={user.avatar} alt="avatar" />
            <p>@{question.username}</p>
          </div>
          <div className="question-details">
            <a href={`/banaan/suaal/${question._id}`}>
              <h1 className="question-name">{question.questionName}</h1>
            </a>
            <p className="question-content">
              <ReactMarkdown children={question.question} />
            </p>
            <div className="tags">
              {question.tags.map(tag => (
                <button key={tag}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="bottom-line"></div>
        </div>
      ))}
    </>
  );
};

export default QuestionLinks;
