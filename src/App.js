import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloClass from './components/HelloClass';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      <Hello ></Hello>
      <HelloClass name="Somen" play="Football"></HelloClass>
      <HelloClass name="Isha" play="Badminton"></HelloClass>
      <Message ></Message>
    </div>
  );
}

export default App;
