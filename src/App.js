import MainPage from './MainPage'
import {useState, useEffect} from 'react';

import './App.css';

function App() {
  const [order, setOrder] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [allItems, setAllItems] = useState({})
  const [finalBill, setFinalBill] = useState(0)

  console.log(allItems)
useEffect(()=> {
  async function getData() {
    try {
        let query = await fetch('http://localhost:8000/allItems');
        let data = await query.json();
        setAllItems(data)
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

getData();
}, [])

function updateTotal(bill){
  const roundedBill = parseFloat(bill.toFixed(2));
  setFinalBill(prevFinalBill => prevFinalBill + roundedBill);

}
return (
    <>
   <MainPage order={order} setOrder={setOrder} customerName={customerName} setCustomerName={setCustomerName} allItems={allItems} finalBill={finalBill} setFinalBill={setFinalBill} updateTotal={updateTotal}/>

   </>
  );
}

export default App;
