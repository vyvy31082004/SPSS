function UserGreeting(props){
    const welcomemessage= <h2 className ="welcome-message">Welcome {props.username}</h2>
    if(props.isLoggedIn){
        return welcomemessage;
    }
}
export default UserGreeting