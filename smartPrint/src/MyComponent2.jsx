import React,{useState} from 'react';
function MyComponent2 (){
    const[name,setName]=useState("Guests");
    const [quantity,setQuantity]=useState(1);
    const[comment,setComment]=useState();
    const[payment,setPayment]=useState();
    const[shipping,setShipping]=useState();
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange (event){
        setQuantity(event.target.value)
    }
    function handleComment(event){
        setComment(event.target.value);
    }
    function handlePayment(event){
        setPayment(event.target.value);
    }
    function handleShipping(event){
        setShipping(event.target.value);
    }
    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            <input value ={quantity} onChange={handleQuantityChange} type="number"></input>
            <p>Quantity: {quantity}</p>
            <textarea value ={comment } onChange={handleComment} placeholder="Please enter your comment"></textarea>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handlePayment}>
                <option value=" "> Select an option </option>
                <option value="Momo">Momo</option>
                <option value="Visa">Visa</option>
            </select>
            <p>Payment: {payment}</p>
            <label>
                <input type="radio" value="Pick up"
                    checked={shipping==="Pick up"}
                    onChange={handleShipping}/>
                Pick up

            </label>

            <label>
                <input type="radio" value="Delivery"
                    checked={shipping==="Delivery"}
                    onChange={handleShipping}/>
                Delivery

            </label>


        </div>
    )

}
export default MyComponent2