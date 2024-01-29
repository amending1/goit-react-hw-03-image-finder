import React from 'react';
import ImageGalleryItem from './ImageGalleryItem.jsx';

const ImageGallery = ({ images, openModal }) => (
  <ul className="ImageGallery">
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem key={id} webformatURL={webformatURL} onClick={() => openModal(largeImageURL)} />
    ))}
  </ul>
);
//każdy element tablicy 'images' jest przekształcany na element <ImageGalleryItem>. Dla każdego obrazka przekazywane są odpowiednie propsy. Funkcja onClick przekazuje adres URL dużego obrazu 'largeImageURL' do funkcji 'openModal'

export default ImageGallery;