import React from 'react';

type UserCardProps = {
  key?: string;
  name?: string;
  date?: string;
  gender?: string;
  img?: string;
  country?: string;
};

class UserCard extends React.Component<UserCardProps, unknown> {
  render(): React.ReactNode {
    return (
      <>
        <div className="product-card card">
          <img className="product-card card__img" src={this.props.img} alt="" />
          <div className="product-card card__title">{this.props.name}</div>
          <div className="product-card card__country">{this.props.country}</div>
          <div className="product-card card__date">{this.props.date}</div>
          <div className="product-card card__gender">{this.props.gender}</div>
        </div>
      </>
    );
  }
}

export { UserCard };
