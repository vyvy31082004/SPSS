import PropTypes from 'prop-types';
function List(props){
    const category=props.category;
    const itemList=props.items;
    //const lowCalFruits = fruits.filter(item => item.calories < 100);
    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}:&nbsp;
                                            <b> {item.calories}</b></li>);
    return (
        <>
                <h3 className="list-category">{category}</h3>
                <ol>{listItems}</ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                             name: PropTypes.string,
                                             calories: PropTypes.numbe}
    ))
}

List.defaultProps ={
    category:"Category",
    items:[],
}
export default List