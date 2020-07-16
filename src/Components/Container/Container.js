import React from 'react';
import styles from './Container.module.css';
import Navbar from './Navbar/Navbar';

//How to use css modules
//return <button className={styles.error}>Error Button</button>;

const Container = (props) => {
    return (
        <div className={styles.container}>
            <Navbar />
            
        </div>
    )
}

export default Container;