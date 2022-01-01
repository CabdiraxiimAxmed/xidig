import answer from '../../features/answer';

const QuestionAnalytics = ({ answers }) => {
  return (
    <div className="analytics">
      <p className="views">
        daawatay: <span>0</span>
      </p>
      <p className="lastUpdate">
        jawaabti ugu dambeesay: <span>11-12-2021</span>
      </p>
      <p className="numberOfAnswers">
        tirada jawaabaha: <span>{answers.length}</span>
      </p>
    </div>
  );
};

export default QuestionAnalytics;
