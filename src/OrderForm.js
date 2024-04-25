import StartOverButton from './StartOverButton'

export default function OrderForm(props) {

    return(
        <div class="OrderForm">
        
        <div style={{fontSize: '1.5rem', paddingLeft: '20px'}}><span style={{textDecoration:'underline'}}>Current Order:</span> {props.order} <span style={{color:'red', fontWeight: 800}}>{props.customerName !== '' && props.order !== '' ? `for ${props.customerName}` : ''}</span></div>
        {props.order !== '' ? <hr></hr> : <div></div>}

        <div style={{fontSize: '1.8rem', paddingLeft: '20px', display:'flex', justifyContent: 'center', gap: '45px', marginTop: '10px'}}><span style={{textDecoration:'underline'}}>Total:</span> <span style={{color: 'green', fontWeigh:'800'}}>${props.finalBill.toFixed(2).toLocaleString()}</span></div>
        <StartOverButton order={props.order} setOrder={props.setOrder} updateTotal={props.updateTotal} finalBill={props.finalBill} setFinalBill = {props.setFinalBill} customerName={props.customerName}/>
        </div>
    )
}