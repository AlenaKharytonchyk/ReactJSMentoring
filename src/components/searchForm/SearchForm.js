import React from "react";
import {InputField, Title} from "../index";
import {Outlet, useSearchParams} from "react-router-dom";

const searchQueryInitial = "What do you want to watch?";

const SearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const setSearchQuery = (searchQuery) => {
        const currentParams = new URLSearchParams(window.location.search)
        currentParams.set('search', searchQuery);
        setSearchParams(currentParams);
    };
    const searchQuery = searchParams.get('search') || searchQueryInitial;

    return (
        <>
            <Title title="Find your movie" />
            <InputField
                inputValue={searchQuery}
                onSearch={(value) => setSearchQuery(value)}
            />
            <Outlet/>
        </>
    )
}

export default SearchForm;
