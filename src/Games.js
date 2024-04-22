import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Games(props) {
    const games = ["Golf Simulator", "Pool Table", "Foosball", "Chess"]
    return (
        <>        
        <h1>Games</h1>
        <div className="buttonHolder">
        {games.map(game => (
            <Button variant="dark" key={game} onClick={()=> {
                console.log({game})
                if(props.order.includes(game)){
                    alert('Only one game session can be ordered per hour.')
                    return
                }
                props.setOrder(props.order + ' ' + game)
            }}>{game}</Button>
        ))}
        </div>
        </>

    )
}