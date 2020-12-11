import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './QuickSearch.css'
import QuickDisplay from './QuickDisplay'

const QuickUrl =  "https://developerfunnel.herokuapp.com/booking"



class QuickLogic extends Component{
    constructor(){
        super()
        this.state = {
            tripType: ''
        }
    }
    render(){
        return(
            <React.Fragment>
                <QuickDisplay tripData={this.state.tripType}></QuickDisplay>
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(QuickUrl, {method:'GET'})
        .then(res=>res.json())
        .then(data=>{this.setState({tripType:data})})
        .catch(err=>{console.log(err)})
    }
}


export default QuickLogic;