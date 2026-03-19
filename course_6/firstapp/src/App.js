import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    alert(name);
  }
  return (
    <div className="App">
      <br />
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <div className='Field'>
          <label>Name:</label>
          <input type='text' name='name' placeholder='Naaaaammmee' value={name} 
          onChange={function(e) {
            setName(e.target.value);
          }}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
