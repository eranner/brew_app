import MainPage from './MainPage'
import {useState} from 'react';
import StartOverButton from './StartOverButton'

import './App.css';

function App() {
  const [order, setOrder] = useState('')
  
  return (
    <>
   <MainPage order={order} setOrder={setOrder}/>
   <h3>{order !== '' ? `Current Order: ${order}` : ''}</h3>

   {order !== '' && <StartOverButton order={order} setOrder={setOrder} />}
   </>
  );
}

export default App;
