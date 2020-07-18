import React from 'react';
import styles from './Container.module.css';
import Navbar from './Navbar/Navbar';
import TopComponent from './TopComponent/TopComponent';

const Container = (props) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <TopComponent />
            
        </div>
    )
}

export default Container;