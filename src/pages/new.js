import {Layout, MovieForm, MovieListPage, SearchForm} from '../components/';
import { BASE_URL } from '../constant';
import { fetchData } from '../utils';

const NewMoviePage = ({initialMovieList}) => (
    <Layout 
      headerContent={<SearchForm />} 
      bodyContent={<MovieListPage initialMovieList={initialMovieList} />} 
      modal={true}
      modalContent={<MovieForm showModal={true} formTitle="Add Movie" />} />
);

export default NewMoviePage;

export async function getStaticProps() {
  const initialMovieList = await fetchData(`${BASE_URL}/movies`);
  
  return {
    props: {
      initialMovieList: initialMovieList.data,
    },
  };
}