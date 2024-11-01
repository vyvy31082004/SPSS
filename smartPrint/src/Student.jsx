import PropTypes from 'prop-types'
function Student(probs){
    return (
        <div className='student'>
            <p>Name: {probs.x}</p>
            <p>Age: {probs.age}</p>
            <p>Student: {probs.isStudent? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes={
    x: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps ={
    x:"Guest",
    age:0,
    isStudent: true,
}
export default Student