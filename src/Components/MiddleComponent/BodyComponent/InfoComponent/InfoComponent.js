import React from 'react';
import styles from './InfoComponent.module.css';

const infoComponent = () => {
    return (
        <div className={styles.infoComponent}>
            <div className={styles.imgBackground}></div>
            <div className={styles.infoDescription}>
                <h1 className={styles.title}>Title Here</h1>
                <p>This is a random paragraph. sdngkjsdn d fdsnfklds fnds lfndsf lsd flsdknf dslknf ldsn flds fds fn lkn fsdlnf sdkn f</p>
            </div>
        </div>
    )
}

export default infoComponent;