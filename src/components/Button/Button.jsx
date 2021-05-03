import React from 'react';

import styles from './Button.module.css';

const Button = ({ handleClick }) => (
    <button onClick={handleClick} type='button' className={styles.Button}>Load More</button>
);

export default Button;