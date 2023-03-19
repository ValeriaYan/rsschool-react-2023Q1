import React from 'react';
import { CardsList } from '../components/cardList/CardsList';
import { Search } from '../components/search/Search';

type HomePageState = {
  error: Error | null;
  products: [];
  isLoaded: boolean;
};

class HomePage extends React.Component<unknown, HomePageState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      error: null,
      products: [],
      isLoaded: false,
    };
  }

  componentDidMount(): void {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            products: result,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error,
          });
        }
      );
  }

  render(): React.ReactNode {
    const { isLoaded, error, products } = this.state;
    if (error) {
      return <div className="error">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="loading">Loading...</div>;
    } else {
      console.log(products);
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
}

export { HomePage };
