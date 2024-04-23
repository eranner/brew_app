import MainPage from './MainPage'
import {useState} from 'react';
import StartOverButton from './StartOverButton'

import './App.css';

function App() {
  const [order, setOrder] = useState('')
  const [customerName, setCustomerName] = useState('')
  
  return (
    <>
   <MainPage order={order} setOrder={setOrder} customerName={customerName} setCustomerName={setCustomerName}/>

   </>
  );
}

export default App;
