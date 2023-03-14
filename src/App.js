import './App.css';
import TitleElement from "./components/Header";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleElement />
        <Counter />
      </header>
    </div>
  );
}

export default App;
