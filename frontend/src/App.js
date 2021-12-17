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
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
