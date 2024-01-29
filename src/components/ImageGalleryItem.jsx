import React from 'react';


//Prop 'webformatURL' zawiera adres URL obrazka do wyświetlenia, a 'onClick' jest funkcją, która zostanie wywołana po kliknięciu na obrazek
const ImageGalleryItem = ({ webformatURL, onClick }) => (
  <li className="ImageGalleryItem">
    <img src={webformatURL} alt="" className="ImageGalleryItem-image" onClick={onClick} />
  </li>
);

export default ImageGalleryItem;