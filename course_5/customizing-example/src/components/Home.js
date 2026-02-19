import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import HomePage from './HomePage';
import { useState } from 'react';

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);  

  return (
    <div>
      <h1>Home</h1>
        <p>Welcome to the home page!</p>
        <p>This is where you can find the latest news and updates.</p>
        <p>Have a nice day!</p>
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

export default Home;