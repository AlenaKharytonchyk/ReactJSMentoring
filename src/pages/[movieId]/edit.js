import { Layout, MovieListPage, SearchForm } from '../../components';
import { MovieForm } from '../../components';
import { BASE_URL } from '../../constant';
import { fetchData } from '../../utils';

const EditMoviePage = ({initialMovieList, movie}) => (
  <Layout 
    headerContent={<SearchForm />} 
    bodyContent={<MovieListPage initialMovieList={initialMovieList} />} 
    modal={true}
    modalContent={<MovieForm showModal={true} formTitle="Edit Movie" initialMovie={movie} />} />
);

export async function getServerSideProps(context) {
  const { movieId } = context.params;
  const movie = await fetchData(`${BASE_URL}/movies/${movieId}`);
  const initialMovieList = await fetchData(`${BASE_URL}/movies`);

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movie, initialMovieList: initialMovieList.data },
  };
}

export default EditMoviePage;
