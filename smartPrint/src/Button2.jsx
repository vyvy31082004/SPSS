function Button (){
   // const handleClick= () => console.log("OUCH!!!");
    //const handleClick2 =(name) => console.log(`${name} OUCH!!!`);
    //const handleClick= (e) => console.log(e);
    const handleClick= (e) => e.target.textContent = "OUCH?";
    return (<button onClick={(e) => handleClick(e)}>Click me</button>);
}
export default Button