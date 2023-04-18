import React, { useState, useEffect } from 'react';
import { CardsList } from '../components/cardList/CardsList';
import { Search } from '../components/search/Search';
import Card from '../models/ICard';
import { useAppSelector } from '../hooks/hooks';

function HomePage(): React.ReactNode {
  const [error, setError] = useState<Error | null>(null);
  const [characters, setCharacters] = useState<Card[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const value = useAppSelector((state) => state.search.value);

  useEffect(() => {
    const url = value
      ? 'https://rickandmortyapi.com/api/character/?name=' + value
      : 'https://rickandmortyapi.com/api/character';
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        if (result.results) {
          setCharacters(result.results);
          setError(null);
        } else {
          setError(new Error(result.error));
        }
        setIsLoaded(true);
      });
  }, [value]);

  let result: React.ReactNode;
  if (error) {
    result = <div className="home-error">{error.message}</div>;
  } else if (!isLoaded) {
    result = <div className="loading">Loading...</div>;
  } else {
    result = (
      <div className="card-list">
        <CardsList characters={characters} />
      </div>
    );
  }
  return (
    <>
      <Search />
      {result}
    </>
  );
}

export { HomePage };
