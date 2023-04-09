import React from 'react';

type ProductCardProps = {
  key?: string;
  name?: string;
  gender?: string;
  species?: string;
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
          <div className="product-card card__title">{this.props.name}</div>
          <div className="product-card card__price">{this.props.species}</div>
          <div className="product-card card__desc">{this.props.gender}</div>
        </div>
      </>
    );
  }
}

export { ProductCard };
