import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBookmark, faPlayCircle } from '@fortawesome/free-regular-svg-icons';

import styles from './mCompContainer.module.css';
import BlockElement from './BlockElement/BlockElement';

const MCompContainer = () => {
    
    //how to use fontAwesome components with React
    //const element = <FontAwesomeIcon icon={faCoffee} />

    const AddressBook = <FontAwesomeIcon icon={faAddressBook} size="3x" />
    const BookMark = <FontAwesomeIcon icon={faBookmark} size="3x" />
    const PlayCircle = <FontAwesomeIcon icon={faPlayCircle} size="3x" />
    const AddressBookStyle = {
        background: 'orange'
    }
    const BookMarkStyle = {
        background: 'green'
    }
    const PlayCircle = {
        background: 'yellow'
    }

    return (
        <div className={styles.mCompContainer}>
            <div className={styles.container}>
                <BlockElement 
                    icon={AddressBook}
                    title="Title One"
                    paragraph="This is a random explanation."
                />
                <BlockElement 
                    icon={BookMark}
                    title="Title Two"
                    paragraph="This is a random explanation."
                />
                <BlockElement 
                    icon={PlayCircle}
                    title="Title Three"
                    paragraph="This is a random explanation."
                />
            </div>
        </div>
    )
}

export default MCompContainer;