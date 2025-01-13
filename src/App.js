import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignPage from './pages/signPage';
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "./index";
import AppRouter from "./AppRouter";
import Header from "./components/header";
import Navbar from "./components/navbar";


const App = observer(() => {
    const {UserStore} = useContext(Context);
    console.log(UserStore);
    return (
        <BrowserRouter>
            <Header></Header>
            <div className="empty-space-app"></div>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;


// <Router>
//     <Routes>
//         <Route path="/" element={<Navigate to={isSignedIn ? "/home" : "/sign"} />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/sign" element={<SignPage />} />
//     </Routes>
// </Router>
