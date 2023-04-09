import React from 'react';
import { ProductCard } from './ProductCard';

type CardsListProps = {
  characters: Card[];
};

export type Card = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

class CardsList extends React.Component<CardsListProps, unknown> {
  render(): React.ReactNode {
    return (
      <>
        {this.props.characters.map((card) => (
          <ProductCard
            key={String(card.id)}
            name={card.name}
            gender={card.gender}
            species={card.species}
            img={card.image}
          />
        ))}
      </>
    );
  }
}

export { CardsList };
