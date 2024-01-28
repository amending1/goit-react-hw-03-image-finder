import React from 'react';

const ImageGalleryItem = ({ webformatURL, onClick }) => (
  <li className="ImageGalleryItem">
    <img src={webformatURL} alt="" className="ImageGalleryItem-image" onClick={onClick} />
  </li>
);

export default ImageGalleryItem;