import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem key={id} webformatURL={webformatURL} onClick={() => openModal(largeImageURL)} />
    ))}
  </ul>
);

export default ImageGallery;