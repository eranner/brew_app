import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Coffee(props) {
    const coffees = [["Regular", 1.49], ["Decaf", 1.49], ["Latte", 2.99],  ["Flat-White", 2.49], ["Americano", 2.49]]

    return (
        <div style={{backgroundImage: 'url("./images/coffee.jpg")', backgroundSize:'cover', height: '100%'}}>
        <h1 style={{textAlign:'center', color: 'orange', textShadow: '2px 2px #333', fontFamily: 'Josefin Sans', fontSize: '3rem', fontWeight: 'bold', paddingTop: '10px', background: 'rgba(255, 255, 255, 0.458)'}}>Coffees</h1>
        <div className="buttonHolder">
        {coffees.map(coffee => (
            <Button style={{fontSize:'1.5rem', textShadow: '1px 1px black', border: '2px solid #333', fontFamily: 'Josefin Sans',}} variant="warning"key={coffee} onClick={()=> {
                console.log({coffee})
                props.setOrder(`${props.order} ` + `${coffee[0]} $${coffee[1]} | `)
            }}>{coffee[0]} ${coffee[1]}</Button>
           ))}
           </div>
        </div>
    )
}