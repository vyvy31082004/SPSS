//import Header from './Header.jsx'
//import Footer from './Footer.jsx'
//import Food from './Food.jsx'
//import Card from './Card.jsx'
//import Button from './Button/Button.jsx'
//import Student from './Student.jsx'
//import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Button2 from './Button2.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import MyComponent2 from './MyComponent2.jsx'
import ToDoList from './ToDoList.jsx'
function App() {
  const fruits= [{id: 1,name:"apple",calories:95},
    {id: 2, name: "banana", calories:60},
    {id: 3, name: "bread", calories: 170}];
return (
  <>
      {fruits.length>0? <List items={fruits} category="Fruits"/> : null}
      <Button2/>
      <ProfilePicture></ProfilePicture>
      <MyComponent></MyComponent>
      <Counter></Counter>
      <MyComponent2> </MyComponent2>
      <ToDoList></ToDoList>
  </>

);
    //return (
      //<>
        //  <Header/>
         // <Footer/>
          //<Food/>
          //<Card/>
          //<Button/>
          //<Student x ="Daisy" age={20} isStudent ={true}/>
          //<Student x ="Vy" age={20} isStudent ={false}/>
          //<Student />
          //<UserGreeting  isLoggedIn={true} username ="Brocode"/>
          
          

     // </>
        
    //);
    
}

export default App
