import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Food(props) {
    const foods = [["Hot Dog", 2.49], ["French Fries", 1.99], ["Cheeseburger", 3.49], ["Onion Rings", 2.79], ["Chips", 1.49], ["Pizza Slice", 2.99], ["Popcorn", 1.74], ["Candy", 1.25]]
    return (
        <div style={{backgroundImage: 'url("./images/food.svg")', backgroundSize:'cover', height: '100%'}}>
        <h1 style={{textAlign:'center', color: 'rgb(200, 25, 25)', textShadow: '2px 2px black', fontFamily: 'Josefin Sans', fontSize: '3rem', fontWeight: 'bold', paddingTop: '10px', background: 'rgba(255, 255, 255, 0.458)'}}>Snacks</h1>
        <div className="buttonHolder">
        {foods.map(food => (
            <Button style={{fontSize:'1.5rem', textShadow: '2px 2px #333', border: '2px solid #333', fontFamily: 'Josefin Sans'}} variant="danger"key={food} onClick={()=> {
                console.log({food})
                props.setOrder(props.order + ' ' + food[0] + ' $' + food[1] + ' | ')
            }}>{food[0] +' $' + food[1]}</Button>
        ))}
        </div>
        </div>
    )
}