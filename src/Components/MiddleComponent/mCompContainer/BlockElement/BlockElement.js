import React from 'react';
import styles from './BlockElement.module.css';
import PropTypes from 'prop-types';

const BlockElement = (props) => {
    
    return (
        <div className={styles.blockElement} style={props.style}>
            {props.icon}
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
        </div>
    );
}

BlockElement.propTypes = {
    title: PropTypes.string,
    summary: PropTypes.string,
    style: PropTypes.string
    //is there a prop type for jsx elements?
}

export default BlockElement;