import './App.css';
import Title from "./components/title/Title";
import Counter from "./components/Counter";
import Container from "./components/container/Container";
import InputField from "./components/input/Input";
import GenreSelect from "./components/genreSelect/GenreSelect";

function App() {
  return (
    <div className="App">
        <Container>
          <Title title="Counter Task" />
          <Counter initialValue={0} />
        </Container>
        <Container>
            <Title title="Search field Task" />
            <InputField
                inputValue="What do you want to watch?"
                onSearch={(value) => alert(value)}
            />
        </Container>
        <Container>
            <Title title="Genre select Task" />
            <GenreSelect
                genreList={["all", "comedy", "drama", "detective"]}
                onSelect={(genre) => alert(genre)}
                selected="comedy"
            />
        </Container>
    </div>
  );
}

export default App;
