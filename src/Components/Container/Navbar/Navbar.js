import React from 'react';
import styles from './Navbar.module.css';

const NavBar = (props) => {
    return (
        <div className={styles.navbar}>
            {/* left side should contain navbar */}

            {/* right side should contain the menu items */}
            <ul className={styles.menuList}>
                <li>Home</li>
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default NavBar;