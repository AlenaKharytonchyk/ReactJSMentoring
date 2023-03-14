import './App.css';
import Title from "./components/title/Title";
import Counter from "./components/Counter";
import Container from "./components/container/Container";
import InputField from "./components/input/Input";

function App() {
  return (
    <div className="App">
        <Container>
          <Title title="Counter Task" />
          <Counter />
        </Container>
        <Container>
            <Title title="Search field Task" />
            <InputField
                inputValue="What do you want to watch?"
                onSearch={(value) => alert(value)}
            />
        </Container>
    </div>
  );
}

export default App;
