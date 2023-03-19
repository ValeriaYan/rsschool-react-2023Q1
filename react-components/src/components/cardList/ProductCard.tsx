import React from 'react';

type ProductCardProps = {
  key: number;
  title: string;
  price: number;
  description: string;
  img: string;
};

class ProductCard extends React.Component<ProductCardProps, unknown> {
  render(): React.ReactNode {
    return (
      <>
        <div className="product-card">
          <img className="product-card__img" src={this.props.img} alt="" />
          <div className="product-card__title">{this.props.title}</div>
          <div className="product-card__price">${this.props.price}</div>
          <div className="product-card__desc">{this.props.description}</div>
        </div>
      </>
    );
  }
}

export { ProductCard };
