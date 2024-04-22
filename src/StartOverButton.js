import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function StartOver(props){
    function clearOrder() {
        props.setOrder('')
    }
    return (

        <Button variant="danger" onClick={clearOrder}>Clear</Button>
    )
}