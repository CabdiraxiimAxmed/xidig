import Questions from './components/questionAndAnswers/Questions';
import './styles/main.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Singup from './components/Singup';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import AskQuestion from './components/AskQuestion';
import UserProfile from './components/UserProfile';
import Head from './components/learning/html/Head';
import Html from './components/learning/html/Html';
import WhatIsHTML from './components/learning/html/WhatIsHTML';
function App() {
  const [formData, setFormData] = useState(null);
  useEffect(() => {
    axios.get('/suaal').then(response => {
      setFormData(response.data);
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/isticmaale/diwaan" element={<Singup />} />
          <Route path="/isticmaale/galid" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/banaan"
              element={formData && <Home formData={formData} />}
            />
            <Route
              path="/banaan/suaal/:questionId"
              element={formData && <Questions />}
            />
            <Route path="/banaan/:username/weydi" element={<AskQuestion />} />
            <Route path="/banaan/:username/profile" element={<UserProfile />} />
            <Route path="/banaan/baro/html/" element={<Html />} />
            <Route path="/banaan/baro/html/cinwaan" element={<Head />} />
            <Route
              path="/banaan/baro/html/waa-maxay-html"
              element={<WhatIsHTML />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
