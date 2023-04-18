import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Modal } from '../modal/Modal';
import Card from '../../models/ICard'

type CardsListProps = {
  characters: Card[];
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
