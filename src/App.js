import './App.css';
import {Title, Counter, Container, InputField, GenreSelect, MovieContainer, MovieDetails} from "./components";
import {moviesArray} from "./mockedMovies";

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
        <MovieDetails movie={moviesArray[0]} />
        <MovieContainer />
    </div>
  );
}

export default App;
