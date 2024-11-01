function ProfilePicture (){
    const imageUrl = 'https://bloganchoi.com/wp-content/uploads/2021/02/crayon-shin-chan-gachinko-gyakushu-no-robo-to-chan.jpg';
    const handleClick = () => console.log("OUCH?");
    return (<img onClick ={handleClick} src ={imageUrl}></img>);
}
export default ProfilePicture