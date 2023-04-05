import React, {useState} from "react";
import './MovieListPage.scss';
import {
    Button,
    Container,
    Footer,
    GenreSelect,
    InputField,
    Logo,
    MovieContainer, MovieDetails, MovieForm,
    SortControl,
    Title
} from "../../components";

const options = ["release date", "title"];
const genres = ["all", "comedy", "drama", "detective"];

const MovieListPage = () => {
    const [searchQuery, setSearchQuery] = useState("What do you want to watch?");
    const [sortQuery, setSortQuery] = useState(options[0]);
    const [genreSortQuery, setGenreSortQuery] = useState(genres[0]);
    const [movieModalVisible, setMovieModalVisible] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    return (
        <div className={`movie-page-wrapper ${movieModalVisible ? 'modal-open' : ''}`}>
            <div className="header">
                <Logo/>
                <Button buttonName="+ ADD MOVIE" buttonClass="button-grey" onClick={() => setMovieModalVisible(true)} />
                <Title title="Search field Task" />
                {
                    selectedMovie
                    ? <MovieDetails movie={selectedMovie} />
                    : <InputField
                        inputValue={searchQuery}
                        onSearch={(value) => setSearchQuery(value)}
                    />
                }
            </div>
            <Container>
                <GenreSelect
                    genreList={genres}
                    onSelect={(genre) => setGenreSortQuery(genre)}
                    selected={genreSortQuery}
                />
                <SortControl selectedOption={sortQuery} options={options} onSelect={(option) => setSortQuery(option)} />
            </Container>
            <MovieContainer onMovieSelect={(movie) => setSelectedMovie(movie)} />
            <Footer />
            <MovieForm showModal={movieModalVisible} formTitle="add movie" onClose={() => setMovieModalVisible(false)}/>
        </div>
    )
}

export default MovieListPage;
