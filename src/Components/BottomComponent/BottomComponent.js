import React from 'react';
import Styles from './BottomComponent.module.css';
import ContactInfo from './ContactInfo/ContactInfo';

const BottomComponent = () => {
    return (
        <div className={Styles.bottomComponent}>
            <ContactInfo />
            <div className={Styles.linksElement}>
                <h3>See Links Below</h3>
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p>
                <p>Link 4</p>
            </div>
            <div className={Styles.emailComponent}>
                <h3>Email Us</h3>
                <p>dksngfod ns fnkldsnf lsdnf aldf lsn flnf lsnd fksdn nsd lfds dfhdf sdfjkdsjg fkasdlfk dfh dkfd.</p>
                <input className={Styles.input}type="text" id="email" name="email" placeholder="Email"/>
                <div>
                    <button className={Styles.bottomCompButton}>Enter</button>
                </div>
            </div>
        </div>
    )
}

export default BottomComponent;