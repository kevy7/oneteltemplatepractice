import React from 'react';
import styles from './InfoComponent.module.css';

const infoComponent = () => {
    return (
        <div className={styles.infoComponent}>
            <div className={styles.imgBackground}></div>
            <div className={styles.infoDescription}>
                <h1>Title Here</h1>
                <p>This is a random paragraph.</p>
            </div>
        </div>
    )
}

export default infoComponent;