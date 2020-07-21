import React from 'react';
import styles from './mCompContainer.module.css';
import BlockElement from './BlockElement/BlockElement';

const MCompContainer = () => {
    return (
        <div className={styles.mCompContainer}>
            <BlockElement />
            <BlockElement />
            <BlockElement />
        </div>
    )
}

export default MCompContainer;