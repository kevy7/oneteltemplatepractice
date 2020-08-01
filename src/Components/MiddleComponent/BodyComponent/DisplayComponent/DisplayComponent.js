import React from 'react';
import styles from './DisplayComponent.module.css';
import DisplayInfoComp from './DisplayInfoComp/DisplayInfoComp';
import GalleryComponent from './GalleryComponent/GalleryComponent';

const DisplayComponent = () => {
    return (
        <div className={styles.displayComponent}>
            <DisplayInfoComp />
            <GalleryComponent />
        </div>
    )
}

export default DisplayComponent;
