import React from "react";
import {MovieTile} from "../../components";
import "./MovieContainer.scss";

const moviesArray = [
    {
        image: "https://picsum.photos/323/486?random=1",
        title: "First film",
        genre: ["drama, comedy"],
        year: "2000",
        id: 1,
    },
    {
        image: "https://picsum.photos/323/486?random=2",
        title: "Second film with long long title",
        genre: ["drama, comedy, detective"],
        year: "2020",
        id: 2,
    },
    {
        image: "https://picsum.photos/323/486?random=3",
        title: "Third film",
        genre: ["detective"],
        year: "2010",
        id: 3,
    }
    ,
    {
        image: "",
        title: "Third film",
        year: "2010",
        id: 4,
    }
];

const MovieContainer = () => {
    return (
        <div className="movie-wrapper">
            {
                moviesArray.map((movie) => (
                    <MovieTile
                        title={movie.title}
                        image={movie.image}
                        year={movie.year}
                        genre={movie.genre}
                        key={movie.id}
                        handleClick={(value) => alert(value)}
                    />
                ))
            }
        </div>
    )
}

export default MovieContainer;
