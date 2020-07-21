import React from 'react';
import styles from './mCompContainer.module.css';
import BlockElement from './BlockElement/BlockElement';

const MCompContainer = () => {
    return (
        <div className={styles.mCompContainer}>
            <div className={styles.container}>
                <BlockElement />
                <BlockElement />
                <BlockElement />
            </div>
        </div>
    )
}

export default MCompContainer;