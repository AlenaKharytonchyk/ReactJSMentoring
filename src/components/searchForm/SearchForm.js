import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { InputField, Title } from '../index';

const searchQueryInitial = 'What do you want to watch?';

const SearchForm = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(
    router.query.search || searchQueryInitial
  );

  const handleSearch = (value) => {
    setSearchQuery(value);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, search: value },
    });
  };

  // Update the searchQuery state when the search query parameter changes
  useEffect(() => {
    setSearchQuery(router.query.search || searchQueryInitial);
  }, [router.query.search]);

  return (
    <>
      <Title title='Find your movie' />
      <InputField inputValue={searchQuery} onSearch={handleSearch} />
    </>
  );
};

export default SearchForm;
