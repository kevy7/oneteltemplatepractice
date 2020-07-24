import React from 'react';
import styles from './mCompContainer.module.css';
import BlockElement from './BlockElement/BlockElement';

const MCompContainer = () => {
    return (
        <div className={styles.mCompContainer}>
            <div className={styles.container}>
                <BlockElement 
                    title="Title One"
                    paragraph="This is a random explanation."
                />
                <BlockElement 
                    title="Title Two"
                    paragraph="This is a random explanation."
                />
                <BlockElement 
                    title="Title Three"
                    paragraph="This is a random explanation."
                />
            </div>
        </div>
    )
}

export default MCompContainer;