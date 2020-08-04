import React from 'react';
import styles from './DisplayComponent.module.css';
import DisplayInfoComp from './DisplayInfoComp/DisplayInfoComp';
import GalleryComponent from './GalleryComponent/GalleryComponent';

const DisplayComponent = () => {
    return (
        <div className={styles.displayComponent}>
            <DisplayInfoComp />
            <GalleryComponent />
            <div className={styles.buttonWrapper}>
                <button className={styles.displayButton}>Click Me</button>
            </div>
            {/* <button className={styles.displayButton}>Click Me</button> */}
        </div>
    )
}

export default DisplayComponent;