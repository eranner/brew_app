import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavLinks from './NavLinks';
import Coffee from './Coffee';
import Food from './Food';
import Games from './Games';
import OrderForm from './OrderForm';

export default function MainPage(props) {
    return (
        <div className="main-holder">
            <Router>
                <div className="side-nav">
                    <NavLinks customerName={props.customerName} setCustomerName={props.setCustomerName}/>
                </div>
                <div className="main-content">
                    <Routes>
                        <Route exact path="/" element={<Coffee order={props.order} setOrder={props.setOrder} allItems={props.allItems} finalBill={props.finalBill} setFinalBill={props.setFinalBill} updateTotal={props.updateTotal}/>} />
                        <Route exact path="/food" element={<Food order={props.order} setOrder={props.setOrder} allItems={props.allItems} finalBill={props.finalBill} setFinalBill={props.setFinalBill} updateTotal={props.updateTotal}/> } />
                        <Route exact path="/games" element={<Games order={props.order} setOrder={props.setOrder} allItems={props.allItems} finalBill={props.finalBill} setFinalBill={props.setFinalBill}updateTotal={props.updateTotal}/>} />
                    </Routes>
                    <OrderForm order={props.order} setOrder={props.setOrder} customerName={props.customerName} finalBill={props.finalBill} setFinalBill={props.setFinalBill} updateTotal={props.updateTotal}/>
                </div>
            </Router>
        </div>
    );
}
