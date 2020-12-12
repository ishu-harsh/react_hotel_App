import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route,Router, Link} from 'react-router-dom'
import Home from './Home/Home'
import Bookings from './Bookings'
import Header from './Header'
import Footer from './Footer'
import DetailsApi from './details/DetailsApi'
import ListingApi from './listing/ListingApi'



const Routing = ()=>{
    return(
        <BrowserRouter>
                <div>
                
                <header>
                    <Header></Header>
                </header>
                    <Route exact path='/'component={Home}></Route>
                    <Route path='/bookings'component={Bookings}></Route>
                    <Route path='/list/:id'component={ListingApi}></Route>
                    <Route path='/details/:id'component={DetailsApi}></Route>
                <Footer/>
                </div>
            </BrowserRouter>
    )
}

export default Routing