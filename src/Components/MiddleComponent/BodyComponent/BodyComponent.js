import React from 'react';
import styles from './BodyComponent.module.css';
import InfoComponent from './InfoComponent/InfoComponent';
import DisplayComponent from './DisplayComponent/DisplayComponent';

const BodyComponent = () => {
    return (
        <div className={styles.bodyComponent}>
            <InfoComponent />
            <DisplayComponent />
        </div>
    )
}

export default BodyComponent;