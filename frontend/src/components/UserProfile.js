import React from 'react';
import QuestionLinks from './QuestionLinks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
const UserProfile = () => {
  const user = useSelector(state => state.user.value);
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    axios
      .get(`/suaal/user-questions/${user.username}`)
      .then(response => {
        setQuestions(response.data);
      })
      .catch(e => console.log(e.message));
  }, []);

  return (
    <div className="user-content-and-user-side-bar-menu-container">
      <div className="side-bar-user-menu">
        <a href="#">su,aalaha</a>
      </div>
      <div className="content-display-wrapper">
        {questions && <QuestionLinks formData={questions} />}
      </div>
    </div>
  );
};

export default UserProfile;
