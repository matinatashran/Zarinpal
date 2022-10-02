import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// components
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import Main from './components/Main';
// import SiteProperty from './components/SiteProperty';
// import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import HomePage from './mainComponents/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={ <HomePage/> }/>
        <Route path='/sign-in' element={ <SignIn/> }/>
        <Route path='/sign-up' element={ <SignUp/> }/>
        <Route path='/' element={<Navigate to="/home"/>}/>
      </Routes>
    </div>
  );
}

export default App;
