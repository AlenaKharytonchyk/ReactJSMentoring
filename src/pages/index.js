import { Layout, MovieListPage, SearchForm } from "../components";
import { BASE_URL } from "../constant";
import { fetchData } from "../utils";

export default function Home({ initialMovieList }) {
  return (
    <Layout headerContent={<SearchForm />} bodyContent={<MovieListPage initialMovieList={initialMovieList} />} />
  );
}

export async function getStaticProps() {
  const initialMovieList = await fetchData(`${BASE_URL}/movies`);
  
  return {
    props: {
      initialMovieList: initialMovieList.data,
    },
  };
}