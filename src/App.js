import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import HelloClass from './components/HelloClass';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Hello name="somen" hero="Iron Man"></Hello>
      <HelloClass name="Somen" play="Football"></HelloClass>
      <HelloClass name="Isha" play="Badminton"></HelloClass>
      <Message message='Welcome Visitor'></Message>
      <Counter></Counter>
    </div>
  );
}

export default App;
