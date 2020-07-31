import React from 'react';
import styles from './DisplayComponent.module.css';
import DisplayInfoComp from './DisplayInfoComp/DisplayInfoComp';

const DisplayComponent = () => {
    return (
        <div className={styles.displayComponent}>
            <DisplayInfoComp />
            
        </div>
    )
}

export default DisplayComponent;
