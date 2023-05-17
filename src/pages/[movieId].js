import { MovieDetails, Layout, MovieListPage, } from "../components";
import { BASE_URL } from "../constant";
import { fetchData } from "../utils";

const MovieDetailsPage = ({initialMovieList, movie}) => (
  <Layout 
    headerContent={<MovieDetails movie={movie} />} 
    bodyContent={<MovieListPage initialMovieList={initialMovieList} />} />
);

export async function getServerSideProps({ params }) {
  const { movieId } = params;
  const movie = await fetchData(`${BASE_URL}/movies/${movieId}`);
  const initialMovieList = await fetchData(`${BASE_URL}/movies`);

  console.warn(movie);
  return {
    props: {
      initialMovieList: initialMovieList.data,
      movie,
    },
  };
}

export default MovieDetailsPage;
