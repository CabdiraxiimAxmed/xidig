import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import axios from 'axios';
import ErrorOutput from './ErrorOutput';
const Login = () => {
  const [cookies, setCookie] = useCookies(['']);
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  async function sendData(e) {
    e.preventDefault();
    let isError = false;
    const data = { username, password };

    if (!username) {
      setUsernameError('Fadlan buuxi meesha banaan');
      isError = true;
    } else setUsernameError(null);

    if (!password) {
      setPasswordError('Fadlan buuxi meesha banaan');
      isError = true;
    } else setPasswordError(null);

    if (isError) return;
    try {
      // * if the response is right
      const user = await axios.post('/user/galid', data);
      setCookie('login', user.data, {
        path: '/',
        maxAge: 1200,
      });
      navigate('/banaan');
    } catch (e) {
      console.log(e.message);
      setError('Waanu ka xunahay qalad ayaa dhacay');
    }
    setTimeout(() => {
      setUsernameError(null);
      setPasswordError(null);
      setError(null);
    }, 3000);
  }
  return (
    <>
      <form className="register-form login-form">
        <h2>Xaqiijin</h2>
        {error && <ErrorOutput error={error} />}
        <div className="form-input-container">
          <label>Fadlan Gali Magaca Qaaska</label>
          <input type="text" onChange={e => handleUsername(e)} />
          {usernameError && <ErrorOutput error={usernameError} />}
          <label>Fadlan Gali Furaha</label>
          <input type="text" onChange={e => handlePassword(e)} />
          {passwordError && <ErrorOutput error={passwordError} />}
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

export default Login;
