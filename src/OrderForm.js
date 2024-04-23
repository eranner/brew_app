import StartOverButton from './StartOverButton'

export default function OrderForm(props) {

    return(
        <div class="OrderForm">
        
        <div style={{fontSize: '1.5rem', paddingLeft: '20px'}}><span style={{textDecoration:'underline'}}>Current Order:</span> {props.order} {props.customerName !== '' && props.order !== '' ? `for ${props.customerName}` : ''}</div>

        <StartOverButton order={props.order} setOrder={props.setOrder} />
        </div>
    )
}