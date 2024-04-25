import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function StartOver(props){

    function toCheckout() {
        // Define the order data
        const orderData = {
            order: props.order,
            customerName: props.customerName,
            finalBill: props.finalBill
        };
    
        // Convert the order data to a query string
        const queryString = new URLSearchParams(orderData).toString();
    
        // Redirect to the checkout page with the order data as query parameters
        window.location.assign(`http://localhost:8000/checkout?${queryString}`);
    }
    function clearOrder() {
        props.setOrder('')
        props.setFinalBill(0)
    }
    return (
        <div style={{display: 'flex', justifyContent:'center', gap: '20px', marginTop: '20px', marginBottom: '20px'}}>
        <Button variant="danger" onClick={clearOrder}>Clear</Button>
        <Button variant="success" onClick={toCheckout}>Place Order</Button>

        </div>
    )
}