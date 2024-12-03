import React from "react";
import styles from './Button.module.css'; // Import CSS module

function Button({ title, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
