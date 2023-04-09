import React from 'react';
import './modal.css';
import { Card } from '../cardList/CardsList';

type ModalProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  content: Card;
};

function Modal(props: ModalProps) {
  return (
    <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__close" onClick={() => props.setActive(false)}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Menu / Close_LG">
              <path
                id="Vector"
                d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className="card__title">{props.content.name}</div>
        <div className="card__img">
          <img src={props.content.image} alt="" />
        </div>
        <div className="card__species">Species: {props.content.species}</div>
        <div className="card__gender">Gender: {props.content.gender}</div>
        <div className="card__status">Status: {props.content.status}</div>
        <div className="card__location">Location: {props.content.location.name}</div>
        <div className="card__origin">Origin: {props.content.origin.name}</div>
      </div>
    </div>
  );
}

export { Modal };
