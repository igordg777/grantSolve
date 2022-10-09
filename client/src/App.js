import logo from './logo.svg';
import './App.css';

function App() {
  const sendMessageTg = () => {
    fetch('/sendtg')
      .then(res => res.text())
      .then(res => console.log(res))
  }
  return (
    <div className="App">
      <button onClick={() => sendMessageTg()}>Отправить смс в тг</button>
    </div>
  );
}

export default App;
