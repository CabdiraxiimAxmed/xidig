const Button = ({ text, stylingClass, handleClick }) => {
  return (
    <button className={`btn ${stylingClass}`} onClick={e => handleClick(e)}>
      {text}
    </button>
  );
};

export default Button;
