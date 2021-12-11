const QuestionLinks = ({ questions }) => {
  return (
    <>
      {questions.map(question => (
        <div key={question._id} className="question-link-container">
          <div className="posted-user">
            <img
              src="https://media.istockphoto.com/photos/young-woman-using-smart-phone-on-a-city-street-picture-id1301953709"
              alt="my"
            />
            <p>@{question.username}</p>
          </div>
          <div className="question-details">
            <a href={`/banaan/suaal/${question._id}`}>
              <h1 className="question-name">{question.name}</h1>
            </a>
            <p className="question-content">{question.question}</p>
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
