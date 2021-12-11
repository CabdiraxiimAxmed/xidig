import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ErrorOutput from './ErrorOutput';
const Singup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [password1, setPassword1] = useState(null);
  const [error, setError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [password1Error, setPassword1Error] = useState(null);
  function handleName(e) {
    setName(e.target.value);
  }
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handlePassword1(e) {
    setPassword1(e.target.value);
  }
  async function sendData(e) {
    e.preventDefault();
    let isError = false;
    const data = { name, username, email, password, password1 };
    if (!name) {
      setNameError('Fadlan buuxi meesha banaan');
      isError = true;
    } else setNameError(null);
    if (!username) {
      setUsernameError('Fadlan buuxi meesha banaan');
      isError = true;
    } else setUsernameError(null);
    if (!email) {
      setEmailError('Fadlan buuxi meesha banaan');
      isError = true;
    } else setEmailError(null);
    if (!password) {
      setPasswordError('Fadlan buuxi meesha banaan');
      isError = true;
    } else setPasswordError(null);
    if (password1 !== password) {
      setPassword1Error('Furaha iskuma aadana');
      isError = true;
    } else setPassword1Error(null);
    if (isError) return;
    try {
      await axios.post('/user/diwaan', data);
      navigate('/isticmaale/galid');
    } catch (e) {
      setError('Waanu ka xunahay qalad ayaa dhacay');
    }
    setTimeout(() => {
      setNameError(null);
      setUsernameError(null);
      setEmailError(null);
      setPasswordError(null);
      setPassword1Error(null);
      setError(null);
    }, 3000);
  }
  return (
    <>
      <form className="register-form">
        <h2>Diwaan Galin</h2>
        {error && <ErrorOutput error={error} />}
        <div className="form-input-container">
          <label>Fadlan Gali Magaca</label>
          <input type="text" onChange={e => handleName(e)} />
          {nameError && <ErrorOutput error={nameError} />}
          <label>Fadlan Gali Magaca Qaaska</label>
          <input type="text" onChange={e => handleUsername(e)} />
          {usernameError && <ErrorOutput error={usernameError} />}
          <label>Fadlan Gali Iimaylka</label>
          <input type="text" onChange={e => handleEmail(e)} />
          {emailError && <ErrorOutput error={emailError} />}
          <label>Fadlan Gali Furaha</label>
          <input type="text" onChange={e => handlePassword(e)} />
          {passwordError && <ErrorOutput error={passwordError} />}
          <label>Fadlan Gali Furaha Markale</label>
          <input type="text" onChange={e => handlePassword1(e)} />
          {password1Error && <ErrorOutput error={password1Error} />}
          <input
            type="submit"
            className="submit-btn"
            value="Dir"
            onClick={e => sendData(e)}
          />
        </div>
      </form>
    </>
  );
};

export default Singup;
