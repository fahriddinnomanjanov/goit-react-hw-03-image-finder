import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ list, openModal }) => {
    const galleryElems = list.map(item => <ImageGalleryItem openModal={openModal}  key={item.id} {...item}/>)

    return (
    <ul className={styles.ImageGallery}>
        {galleryElems}
    </ul>
    )
};

export default ImageGallery;