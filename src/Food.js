import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Food(props) {
    const foods = ["Hot Dog", "French Fries", "Cheeseburger", "Onion Rings", "Chips"]
    return (
        <>
        <h1>Food</h1>
        <div className="buttonHolder">
        {foods.map(food => (
            <Button variant="warning"key={food} onClick={()=> {
                console.log({food})
                props.setOrder(props.order + ' ' + food)
            }}>{food}</Button>
        ))}
        </div>
        </>
    )
}