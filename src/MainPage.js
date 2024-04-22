import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { NavLink } from "react-router-dom";

import Coffee from './Coffee'
import Food from './Food'
import Games from './Games'
export default function MainPage(props) {
    
    return (
        <div className="main-holder">
            <div className="tab-control">
            <Router>
                <NavLink to="/">Coffee</NavLink>
                <NavLink to="/food">Food</NavLink>
                <NavLink to="/games">Games</NavLink>
                <Routes>
                    <Route exact path="/" element={<Coffee order={props.order} setOrder={props.setOrder}/>}/>
                    <Route exact path="/food" element={<Food order={props.order} setOrder={props.setOrder}/>}/>
                    <Route exact path="/games" element={<Games order={props.order} setOrder={props.setOrder}/>}/>
                </Routes>
            </Router>
            </div>
            {/* <div className="main-content-holder">{props.order}</div> */}
        </div>
    )
}