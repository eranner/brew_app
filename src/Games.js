import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Games(props) {

    const games = props.allItems.games || []
    return (
        <div style={{backgroundImage: 'url("./images/games.jpg")', backgroundSize:'cover', height: '100%'}}>        
        <h1 style={{textAlign:'center', color: '#333', textShadow: '2px 2px gold', fontFamily: 'Josefin Sans', fontSize: '3rem', fontWeight: 'bold', paddingTop: '10px', background: 'rgba(255, 255, 255, 0.458)'}}>Games</h1>
        <div className="buttonHolder">
        {games.map(game => (
            <Button style={{fontSize:'1.5rem', color: "gold", textShadow: '2px 2px black', border: '2px solid gold', fontFamily: 'Josefin Sans'}} variant="dark" key={game.id} onClick={()=> {
                
                if(props.order.includes(game.game)){
                    alert('Only one game session can be ordered per hour.')
                    return
                }
                props.setOrder(props.order + ' ' + game.game + ' $'+game.price + '/'+ game.minutes +'min | ')
            }}>{game.game} {game.price === 0 ? 'free/' + game.minutes +' min' : '$'+game.price + '/'+ game.minutes +'min'}</Button>
        ))}
        </div>
        </div>

    )
}