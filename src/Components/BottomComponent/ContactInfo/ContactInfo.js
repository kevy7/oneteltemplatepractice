import React from 'react';
import Styles from './ContactInfo.module.css';

const ContactInfo = () => {
    return (
        <div className={Styles.contactInfo}>
            <p>sfgnjf gnfl ngsn fdsn fldsnf ldks fldk nknds lfnd fd fkdn sfn dslkfn dslf ndls fns ksdfknf.</p>
            <p>123-456-7890</p>
            <p>FakeEmail@Email.com</p>
            <p>fakecompany.com</p>

            {/* <ul>
                <li>123-456-7890</li>
                <li>FakeEmail@Email.com</li>
                <li>fakecompany.com</li>
            </ul> */}
        </div>
    )
}

export default ContactInfo;