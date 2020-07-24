import React from 'react';
import styles from './BlockElement.module.css';
import PropTypes from 'prop-types';

const BlockElement = (state) => {
    console.log(state);
    return (
        <div className={styles.blockElement}>

        </div>
    );
}

BlockElement.propTypes = {
    title: PropTypes.string,
    summary: PropTypes.string
}

export default BlockElement;