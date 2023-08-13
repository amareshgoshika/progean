import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CandidateRegistration from './components/CandidateRegistration';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidate-registration" element={<CandidateRegistration />} />
        </Routes>
    </Router>
  );
}

export default App;
