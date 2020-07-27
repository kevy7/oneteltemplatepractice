import React from 'react';
import styles from './BodyComponent.module.css';
import InfoComponent from './InfoComponent/InfoComponent';

const BodyComponent = () => {
    return (
        <div className={styles.bodyComponent}>
            <InfoComponent />
        </div>
    )
}

export default BodyComponent;