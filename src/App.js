import logo from './logo.svg';
import './App.css';
import Counter from './CounterClass.js'
import FunctionalCounter from './CounterFunctional';

function App() {
  return (
    <div className="App">
      <Counter/>

      <FunctionalCounter/>
    </div>
  );
}

export default App;
