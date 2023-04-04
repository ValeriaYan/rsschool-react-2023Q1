import React from 'react';

type ProductCardProps = {
  key?: string;
  title?: string;
  price?: number;
  description?: string;
  img?: string;
};

class ProductCard extends React.Component<ProductCardProps, unknown> {
  render(): React.ReactNode {
    return (
      <>
        <div className="product-card card">
          <div className="product-card card__img">
            <img src={this.props.img} alt="" />
          </div>
          <div className="product-card card__title">{this.props.title}</div>
          <div className="product-card card__price">${this.props.price}</div>
          <div className="product-card card__desc">{this.props.description}</div>
        </div>
      </>
    );
  }
}

export { ProductCard };
