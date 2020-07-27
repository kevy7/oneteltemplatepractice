import React from 'react';
import styles from './MiddleComponent.module.css';
import MCompContainer from './mCompContainer/mCompContainer';
import BodyComponent from './BodyComponent/BodyComponent';

const MiddleComponent = () => {
    return (
        <div className={styles.middleComponent}>
            <MCompContainer />
            {/* add Body container here */}
            <BodyComponent />
        </div>
    )
}

export default MiddleComponent;