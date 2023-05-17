import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
    Container,
    GenreSelect,
    MovieContainer,
    SortControl,
} from '../../components';
import { BASE_URL } from '../../constant'; 
import { fetchData } from '../../utils';

const options = [
  {
    option: 'release date',
    value: 'release_date',
  },
  {
    option: 'title',
    value: 'title',
  },
];
const genres = ['all', 'comedy', 'drama', 'detective'];

export default function MovieListPage({ initialMovieList = [] }) {
  const router = useRouter();
  const { query } = router;
  const { search, sortBy, filter } = query;

  const [movieList, setMovieList] = useState(initialMovieList);

  useEffect(() => {
    if (search || sortBy || filter) {
      fetchData(
        `${BASE_URL}/movies?search=${search || ''}&sortBy=${sortBy || ''}&filter=${
          filter || ''
        }&sortOrder=asc&searchBy=title`
      ).then((data) => setMovieList(data.data));
    }
  }, [search, sortBy, filter]);

  const setSortQuery = (sortQuery) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sortBy: sortQuery },
    });
  };

  const setGenreSortQuery = (genreSortQuery) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, filter: genreSortQuery === genres[0] ? '' : genreSortQuery },
    });
  };

  return (
    <>
      <Container>
        <GenreSelect
          genreList={genres}
          onSelect={setGenreSortQuery}
          selected={filter || genres[0]}
        />
        <SortControl selectedOption={sortBy} options={options} onSelect={setSortQuery} />
      </Container>
      <MovieContainer movieList={movieList} />
    </>
  );
}
