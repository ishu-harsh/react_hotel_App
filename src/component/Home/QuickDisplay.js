import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './QuickSearch.css'



const QuickDisplay = (props)=>{
    console.log(props.tripData)
    const renderTrip  = (tripData)=>{
        if (tripData){
            return tripData.map(item=>{
                return(
                    <Link to={`/list/${item.trip}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.image}/>
                            </div>
                            <div className="tileComponent2">
                            <div className="componentHeading">{item.name}</div>
                <div className="componentSubHeading">Start Your {item.name} trip</div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return (
        <React.Fragment>
            <div className="quickSearchContainer">
            <p className="quickSearchHeading" >QuickSearch Page</p>
            <p className="quickSearchSubHeading" >Plan a trip with Us</p>
            {renderTrip(props.tripData)}
            </div>
        </React.Fragment>
    )
}

export default QuickDisplay;