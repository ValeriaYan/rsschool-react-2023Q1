import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Modal } from '../modal/Modal';

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

function CardsList(props: CardsListProps) {
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState<Card>(props.characters[0]);

  function onClickCard(content: Card) {
    setModalContent(content);
    setModalActive(true);
  }
  return (
    <>
      {props.characters.map((card) => (
        <ProductCard click={onClickCard} key={String(card.id)} card={card} />
      ))}
      <Modal active={modalActive} setActive={setModalActive} content={modalContent} />
    </>
  );
}

export { CardsList };
