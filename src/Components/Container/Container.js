import React from 'react';
import styles from './Container.module.css';
import Navbar from './Navbar/Navbar';

const Container = (props) => {
    return (
        <div className={styles.container}>
            <Navbar />
            
        </div>
    )
}

export default Container;