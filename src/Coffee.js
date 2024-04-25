import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Coffee(props) {
    const coffees = props.allItems.coffees || []
    return (
        <div style={{backgroundImage: 'url("./images/coffee.jpg")', backgroundSize:'cover', height: '100%'}}>
        <h1 style={{textAlign:'center', color: 'orange', textShadow: '2px 2px #333', fontFamily: 'Josefin Sans', fontSize: '3rem', fontWeight: 'bold', paddingTop: '10px', background: 'rgba(255, 255, 255, 0.458)'}}>Coffee</h1>
        <div className="buttonHolder">
        {coffees.map(coffee => (
            <Button style={{fontSize:'1.5rem', textShadow: '1px 1px black', border: '2px solid #333', fontFamily: 'Josefin Sans',}} variant="warning"key={coffee.id} onClick={()=> {
                props.updateTotal(parseFloat(coffee.price))
                props.setOrder(`${props.order} ` + `${coffee.size} ${coffee.coffee} $${coffee.price} | `)
            }}>{coffee.size} {coffee.coffee} ${coffee.price}</Button>
           ))}
           </div>
        </div>
    )
}