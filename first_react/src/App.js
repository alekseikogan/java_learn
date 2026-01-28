import logo from './logo.svg';
import './App.css';

function Header() {
  return <h1 style={{ color: 'blue' }}>Леша</h1>;
}

function App() {
  const title = 'My App - and you will see it change!';
  return (
    <div className="App" style={{ color: 'red' }}>
      {title} + {<Header />}
    </div>
  )
}

export default App;
