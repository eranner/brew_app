import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Coffee(props) {
    const coffees = ["Regular", "Decaf", "Latte", "Flat-White", "Americano"]

    return (
        <>
        <h1>Coffees</h1>
        <div className="buttonHolder">
        {coffees.map(coffee => (
            <Button variant="primary"key={coffee} onClick={()=> {
                console.log({coffee})
                props.setOrder(`${props.order} ` + `${coffee} `)
            }}>{coffee}</Button>
           ))}
           </div>
        </>
    )
}