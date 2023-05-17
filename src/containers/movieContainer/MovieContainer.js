import React from "react";
import {MovieTile} from "../../components";
import styles from "./MovieContainer.module.scss";
import { useRouter } from 'next/router';

const MovieContainer = ({movieList}) => {
    const router = useRouter();

    return (
        <div className={styles["movie-wrapper"]}>
            {
                movieList.map((movie) => (
                    <MovieTile
                        movie={movie}
                        key={movie.id}
                        handleClick={() => router.push(`/${movie.id}`)}
                    />
                ))
            }
        </div>
    )
}

export default MovieContainer;
