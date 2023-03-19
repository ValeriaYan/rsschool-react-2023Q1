import React from 'react';
import { ProductCard } from './ProductCard';

type CardsListProps = {
  products: Card[];
};

export type Card = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
};

class CardsList extends React.Component<CardsListProps, unknown> {
  render(): React.ReactNode {
    return (
      <>
        {this.props.products.map((card) => (
          <ProductCard
            key={String(card.id)}
            title={card.title}
            price={card.price}
            description={card.description}
            img={card.images[0]}
          />
        ))}
      </>
    );
  }
}

export { CardsList };
