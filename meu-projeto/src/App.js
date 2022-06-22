import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Iago"

  return (
    <div className="App">
      <SayMyName nome = "Renan" />
      <SayMyName nome = "Dade" />
      <SayMyName nome = {nome} />
      <Pessoa nome = "Renan" idade="22" profissão="Programador" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
