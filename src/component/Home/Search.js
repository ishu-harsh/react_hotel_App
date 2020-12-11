import React, {Component}from 'react'
import './Search.css'

const lurl = "https://developerfunnel.herokuapp.com/location"
const hurl =  "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component{
    constructor(){
        super()
        this.state = {
            city : '',
            hotels: ''
        }
    }
     
    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then(res=>res.json())
        .then(data=>{
            this.setState({city:data})
            })
        .catch(err=>{console.log(err)})
    }


    // Display City
    renderCity = (data)=>{
        // console.log(data)
        if (data){
           return data.map((item)=>{
                // console.log(item)
                return (
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
        
    }


    handleCity = (event) => {
            const cityId = event.target.value
            const url = hurl+cityId
            // console.log(url)
            fetch(url, {method: 'GET'})
            .then(res=>res.json())
            .then((data)=>{this.setState({hotels:data})
               console.log(this.state.city) })
            .catch(err=>console.log(err))
        }

        // Display Hotels 
    renderHotels = (data)=>{
        // console.log(data)
        if (data){
            return data.map((item)=>{
                console.log(item)
                return (
                    <option value={item.city}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
        
    }

    render(){
        return(
            <React.Fragment>
                <div className="imageContainer">
                    <div id="logo">
                        <b>IS</b>
                    </div>
                    <div className="heading">
                        <h2>Plan your vacation</h2>
                    </div>
                    <div className="locationSelector">
                        <select className="locationDropDown" onChange={this.handleCity}>
                            <option>Select City</option>
                            {this.renderCity(this.state.city)}
                        </select>
                        <select className="locationDropDown">
                            <option>Select Hotel</option>
                            {this.renderHotels(this.state.hotels)}
                        </select>
                    </div>
                </div>
            {/* <p>Search Page</p> */}
            </React.Fragment> 
        )
    }
}

export default Search;