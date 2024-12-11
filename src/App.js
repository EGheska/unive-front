import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignPage from './pages/signPage';


function App() {
    const isSignedIn = false;
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to={isSignedIn ? "/home" : "/sign"} />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/sign" element={<SignPage />} />
            </Routes>
        </Router>
    );
}

export default App;
