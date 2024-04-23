import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function StartOver(props){
    function clearOrder() {
        props.setOrder('')
    }
    return (
        <div style={{display: 'flex', justifyContent:'center', gap: '20px', marginTop: '20px', marginBottom: '20px'}}>
        <Button variant="danger" onClick={clearOrder}>Clear</Button>
        <Button variant="success">Place Order</Button>

        </div>
    )
}