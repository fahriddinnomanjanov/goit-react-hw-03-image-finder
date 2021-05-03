import React from 'react';

import styles from './ImageGalleryItem.module.css';
// id, webformatURL, largeImageURL

const ImageGalleryItem = ({ id, webformatURL, tags, openModal, largeImageURL }) => (
            <li onClick={() => openModal(largeImageURL)} id={id} className={styles.ImageGalleryItem}>
                <img src={webformatURL} alt={tags} className={styles.ImageGalleryItemImage} />
            </li>
);

export default ImageGalleryItem;