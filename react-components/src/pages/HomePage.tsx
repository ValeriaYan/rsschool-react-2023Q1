import React, { useState, useEffect } from 'react';
import { CardsList } from '../components/cardList/CardsList';
import { Search } from '../components/search/Search';
import { useAppSelector } from '../hooks/hooks';
import { charactersApi } from '../services/charactersService';

function HomePage(): React.ReactNode {
  const value = useAppSelector((state) => state.search.value);
  const { data: characters, error, isLoading } = charactersApi.useFetchAllCharactersQuery(value);

  return (
    <>
      <Search />
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="home-error">There is nothing here</div>}
      {characters && !error && (
        <div className="card-list">
          <CardsList characters={characters.results} />
        </div>
      )}
    </>
  );
}

export { HomePage };
