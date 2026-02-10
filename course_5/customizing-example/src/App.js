import './App.css';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Btn from './components/Btn';
import ModeToggle from './modeToggle';
import InputComponent from './components/InpChange';
import TextInputWithFocusButton from './components/Focus';

function App() {
  return (
    <div className='App'>
      <Intro1 />
      <Intro2 />
      <Btn />
      <ModeToggle />
      <br />
      <hr />
      <InputComponent />
      <br />
      <hr />
      <TextInputWithFocusButton />
    </div>
  );
}

export default App;
