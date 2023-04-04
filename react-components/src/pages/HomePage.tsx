import React, { useState, useEffect } from 'react';
import { CardsList } from '../components/cardList/CardsList';
import { Search } from '../components/search/Search';
import { Card } from '../components/cardList/CardsList';

function HomePage(): React.ReactNode {
  const [error, setError] = useState<Error | null>(null);
  const [products, setProducts] = useState<Card[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then(
        (result) => {
          setProducts(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
      <>
        <Search />
        <div className="card-list">
          <CardsList products={products} />
        </div>
      </>
    );
  }
}

export { HomePage };
