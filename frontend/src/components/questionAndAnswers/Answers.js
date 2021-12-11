const Answers = ({ answers }) => {
  return answers.map(answer => (
    <div className="answer-container">
      <div>
        <div className="postedPerson">
          <img
            src="https://media.istockphoto.com/photos/young-woman-using-smart-phone-on-a-city-street-picture-id1301953709"
            alt="woman standing"
          />
          <p>Maria Ahmed</p>
        </div>
        <div className="answer">
          <p>{answer.answer}</p>
        </div>
      </div>
    </div>
  ));
};

export default Answers;
