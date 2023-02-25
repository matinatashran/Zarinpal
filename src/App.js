import { Routes, Route, Navigate } from 'react-router-dom';

// styles
import './styles/App.css';

// components
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={ <LandingPage/> }/>
        <Route path='/sign-in' element={ <SignIn/> }/>
        <Route path='/sign-up' element={ <SignUp/> }/>
        <Route path='/' element={<Navigate to="/home"/>}/>
      </Routes>
    </div>
  );
}

export default App;
