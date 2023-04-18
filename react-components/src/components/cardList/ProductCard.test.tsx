import { render } from '@testing-library/react';
import React from 'react';

import { ProductCard } from './ProductCard';
import Card from '../../models/ICard';

const testCharacters: Card[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
];

describe('ProductCard', () => {
  let modalActive = false;
  let modalContent = testCharacters[0];

  function setModalActive(active: boolean) {
    modalActive = active;
  }

  function setModalContent(card: Card) {
    modalContent = card;
  }

  function onClickCard(content: Card) {
    setModalContent(content);
    setModalActive(true);
  }
  it('render test for ProductCard', () => {
    render(
      <ProductCard
        click={onClickCard}
        key={String(testCharacters[0].id)}
        card={testCharacters[0]}
      />
    );
  });
});
