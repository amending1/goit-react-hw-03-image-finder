import React from 'react';

const Modal = ({ largeImageURL, closeModal }) => (
  <div className="Overlay" onClick={closeModal}>
    <div className="Modal">
      <img src={largeImageURL} alt="" />
    </div>
  </div>
);

export default Modal;