import React from 'react';
import Styles from "./TopComponent.module.css";
//import backgroundImg from '../../../Images/bgImage.jpg';

const TopComponent = () => {
    return (
        <div className={Styles.topComponent}>
            <div>
            <h2 className={Styles.topTitle}>Title here</h2>
            <h1 className={Styles.topTitle}>Second title here</h1>
            </div>
        </div>
    );
}

export default TopComponent;