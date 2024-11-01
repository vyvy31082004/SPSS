import React, {useState} from 'react';


function MyComponent(){
    const [name,setName] = useState("Guest");
    const [age, setAge] =useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
        setName("Daisy with love");
    }
    const updateAge = () =>
    {
        setAge(age+1);
    }

    const EmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    return (
        <div>
            <h3>
                Name: {name}
            </h3>
            <button onClick ={updateName}>Set Name </button>
            <h3>
                Age: {age}
            </h3>
            <button onClick ={updateAge}>Age</button>
            <h3>
                isEmployed : {isEmployed? "Yes":"No"}
            </h3>
                <button onClick ={EmployedStatus}> isEmployed </button>  
            
        </div>

    );

}
export default MyComponent 