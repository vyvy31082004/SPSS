import React,{useState} from 'react';
function Counter (){
    const [count, setCount]=useState(0);
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }
    const reset = () =>
    {
        setCount(0);
    }

    return (
        <div className="counter-Container">
            <p className="count-Display"> {count} </p>
            <button button className="counter-button" onClick ={decrement}>Decrement</button>
            <button button className="counter-button" onClick ={increment}>Increment</button>
            <button button className="counter-button" onClick ={reset}>Reset</button>
        </div>
    )


}
export default Counter