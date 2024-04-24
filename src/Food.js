import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Food(props) {
    const foods = props.allItems.snacks || []
    return (
        <div style={{backgroundImage: 'url("./images/food.svg")', backgroundSize:'cover', height: '100%'}}>
        <h1 style={{textAlign:'center', color: 'rgb(200, 25, 25)', textShadow: '2px 2px black', fontFamily: 'Josefin Sans', fontSize: '3rem', fontWeight: 'bold', paddingTop: '10px', background: 'rgba(255, 255, 255, 0.458)'}}>Snacks</h1>
        <div className="buttonHolder">
        {foods.map(food => (
            <Button style={{fontSize:'1.5rem', textShadow: '2px 2px #333', border: '2px solid #333', fontFamily: 'Josefin Sans'}} variant="danger"key={food} onClick={()=> {
                console.log({food})
                props.setOrder(props.order + ' ' + food.snack + ' $' + food.price + ' | ')
            }}>{food.snack +' $' + food.price}</Button>
        ))}
        </div>
        </div>
    )
}