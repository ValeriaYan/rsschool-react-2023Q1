import React, { useState, useEffect } from 'react';
import { CardsList } from '../components/cardList/CardsList';
import { Search } from '../components/search/Search';
import { useAppSelector } from '../hooks/hooks';
import { charactersApi } from '../services/charactersService';

function HomePage(): React.ReactNode {
  const value = useAppSelector((state) => state.search.value);
  const { data: characters, error, isLoading } = charactersApi.useFetchAllCharactersQuery(value);

  let result: React.ReactNode;
  if (characters) {
    result = (
      <div className="card-list">
        <CardsList characters={characters.results} />
      </div>
    );
  } else if (error) {
    result = <div className="home-error">Here is nothing</div>;
  } else if (!isLoading) {
    result = <div className="loading">Loading...</div>;
  }
  return (
    <>
      <Search />
      {result}
    </>
  );
}

export { HomePage };
