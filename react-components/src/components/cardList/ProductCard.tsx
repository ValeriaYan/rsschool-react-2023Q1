import React from 'react';
import Card from '../../models/ICard';

type ProductCardProps = {
  click: (content: Card) => void;
  key?: string;
  card: Card;
};

class ProductCard extends React.Component<ProductCardProps, unknown> {
  render(): React.ReactNode {
    return (
      <>
        <div className="product-card card" onClick={this.props.click.bind(this, this.props.card)}>
          <div className="product-card card__img">
            <img src={this.props.card.image} alt="" />
          </div>
          <div className="product-card card__title">{this.props.card.name}</div>
          <div className="product-card card__subtitle">{this.props.card.species}</div>
          <div className="product-card card__desc">{this.props.card.gender}</div>
        </div>
      </>
    );
  }
}

export { ProductCard };
