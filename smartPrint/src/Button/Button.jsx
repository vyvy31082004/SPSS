// Button.js
import React from "react";
import styles from './Button.module.css'; // Import CSS module

function Button({ title }) {
  return (
    <button className={styles.button}>{title}</button> // Áp dụng lớp 'button' từ CSS module
  );
}

export default Button;
