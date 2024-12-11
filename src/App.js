import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignPage from './pages/signPage';
import { observer } from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "./index";


const App = observer(() => {
    const isSignedIn = false;
    const { UserStore } = useContext(Context);
    console.log(UserStore);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to={isSignedIn ? "/home" : "/sign"} />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/sign" element={<SignPage />} />
            </Routes>
        </Router>
    );
});

export default App;
