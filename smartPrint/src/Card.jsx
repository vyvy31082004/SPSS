import picture from './assets/blackpink-rose-profile-1-e1605241913974-997x1024.jpg'
function Card (){
    return (
        <div className='card'>
            <img className="card-image" src={picture}></img>
            <h2 className='card-tile'>Bro</h2>
            <p className='card-text'>I wanna have jobs</p>
        </div>
    );
}
export default Card