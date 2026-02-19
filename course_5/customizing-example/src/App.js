import './App.css';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Btn from './components/Btn';
import ModeToggle from './modeToggle';
import InputComponent from './components/InpChange';
import TextInputWithFocusButton from './components/Focus';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import HomePage from './components/HomePage';
import { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);  

  return (
    <div className='App'>
      {/* <Intro1 />
      <Intro2 />
      <Btn />
      <ModeToggle />
      <br />
      <hr />
      <InputComponent />
      <br />
      <hr />
      <TextInputWithFocusButton /> */}
      <nav className='nav'>
        {/* <a href='/'>Home</a> */}
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About me</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
      </Routes>
      
      <>
            {loggedIn ? (
                <div>
                    <HomePage />
                    <LogoutButton logout={logout} />
                </div>
            ) : (
                <LoginButton login={login} />
            )}
      </>
      
    </div>
  );
}

export default App;
