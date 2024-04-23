import { NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';


export default function NavLinks(props) {

    function updateCustomer(e) {
        props.setCustomerName(e.target.value)
    }
    return (
        <div className="tabs">
            <h2 style={{fontSize: '3rem', textAlign: 'center', fontFamily: 'Josefin Sans'}}>Order Here</h2>
            <hr></hr>
            <NavLink to="/" style={{paddingLeft: '5px'}}>Coffee</NavLink>
            <NavLink to="/food" style={{paddingLeft: '5px'}}>Snacks</NavLink>
            <NavLink to="/games" style={{paddingLeft: '5px'}}>Games</NavLink>
            <hr></hr>
            <label style={{fontSize: '1.5rem', textAlign:'center'}}>Customer Name:</label>
            <Form.Control style={{color:'red', fontWeight: 'bold'}} onChange={updateCustomer}/>
            <label style={{fontSize: '1rem', textAlign:'center'}}>Place the name for the order in the box above.</label>

            
        </div>
    );
}