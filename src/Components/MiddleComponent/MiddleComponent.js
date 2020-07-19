import React from 'react';
import styles from './MiddleComponent.module.css';
import MCompContainer from './mCompContainer/mCompContainer';

const MiddleComponent = () => {
    return (
        <div className={styles.middleComponent}>
            <MCompContainer />
        </div>
    )
}

export default MiddleComponent;