import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Games(props) {
    const games = [["Golf Simulator", 25, 'hour'],["Pool Table", 10, '30min.'], ["Foosball", 5, '30min'], ["Chess", 0, '30min']]
    return (
        <div style={{backgroundImage: 'url("./images/games.jpg")', backgroundSize:'cover', height: '100%'}}>        
        <h1 style={{textAlign:'center', color: '#333', textShadow: '2px 2px gold', fontFamily: 'Josefin Sans', fontSize: '3rem', fontWeight: 'bold', paddingTop: '10px', background: 'rgba(255, 255, 255, 0.458)'}}>Games</h1>
        <div className="buttonHolder">
        {games.map(game => (
            <Button style={{fontSize:'1.5rem', color: "gold", textShadow: '2px 2px black', border: '2px solid gold', fontFamily: 'Josefin Sans'}} variant="dark" key={game} onClick={()=> {
                console.log({game})
                if(props.order.includes(game[0])){
                    alert('Only one game session can be ordered per hour.')
                    return
                }
                props.setOrder(props.order + ' ' + game[0] + ' $'+game[1] + '/'+ game[2] +' | ')
            }}>{game[0]} {game[1] === 0 ? 'free/' + game[2] : `$${game[1]}/${game[2]}`}</Button>
        ))}
        </div>
        </div>

    )
}