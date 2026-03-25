import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [score, setScore] = useState('5');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    alert('Form submitted!');
  }
  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    if (score < 5) {
      alert('We are sorry to hear that your experience was not good. We will work on improving it.');
      return;
    }
    setScore('5');
    setComment('');
    alert('Feedback submitted with score: ' + score + ' and comment: ' + comment);
  }
  
  return (
    <div className="App">
      <br />
      <form onSubmit={handleSubmit}>
        <div className='Field'>
          <label>Name:</label>
          <input type='text' name='name' placeholder='Naaaaammmee' value={name} 
          onChange={function(e) {
            setName(e.target.value);
          }}/>
        </div>
        <button type='submit'>Submit</button>
      </form>


      <div>
        <h1>Second form</h1>
        <form onSubmit={handleSubmitFeedback}>
          <fieldset>
            <h2> Feedback form</h2>
            <div className='Field'>
              <label>Score: {score}</label>
              <input 
                type="range"
                min="0"
                max="10"
                onChange={e => setScore(e.target.value)}
              />
            </div>
            <div className='Field'>
              <label>Comment:</label>
              <input type='text' name='comment' placeholder='Comment here...' onChange={e => setComment(e.target.value)}/>
            </div>
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
      </div>


    </div>
  );
}

export default App;
