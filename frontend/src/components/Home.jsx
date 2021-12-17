import QuestionLinks from './QuestionLinks';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Home = ({ formData }) => {
  const [user_id, setUserId] = useCookies(['']);
  const [user, setUser] = useState(null);
  // using the server
  useEffect(() => {
    axios.get(`/user/${user_id.login}`).then(response => setUser(response));
  }, []);
  return user ? (
    <div className="question-link-wrapper">
      <QuestionLinks formData={formData} />
    </div>
  ) : (
    <div>loading</div>
  );
};

export default Home;
