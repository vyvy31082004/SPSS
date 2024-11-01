//Cách1: external
//c2: modules
//Inline
import styles from './Button.module.css'
function Button(){
    return (
        <button className={styles.button}>Click me</button>
    );
}
export default Button 
//Inline:
//const styles ={background-color: aquamarine;
 //   color:black;
   // padding: 10px 20px;
   //order-radius: 10px;
    //border: none;
    //cursor: pointer;}