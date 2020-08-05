import React from 'react';
import Styles from './BottomComponent.module.css';
import ContactInfo from './ContactInfo/ContactInfo';

const BottomComponent = () => {
    return (
        <div className={Styles.bottomComponent}>
            <ContactInfo />
            
        </div>
    )
}

export default BottomComponent;