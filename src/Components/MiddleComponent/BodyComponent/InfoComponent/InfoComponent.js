import React from 'react';
import styles from './InfoComponent.module.css';

const infoComponent = () => {
    return (
        <div className={styles.infoComponent}>
            <div className={styles.imgBackground}></div>
            <div className={styles.infoDescription}>
                <h1></h1>
            </div>
        </div>
    )
}

export default infoComponent;