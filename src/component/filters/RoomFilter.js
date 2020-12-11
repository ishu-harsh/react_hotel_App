import React, {Component} from 'react'
import axios from 'axios'
const rurl = "http://developerfunnel.herokuapp.com/hotellist"
// const rurl = "http://developerfunnel.herokuapp.com/hotellist/1?roomtype=1"


class RoomFilter extends Component {
    

    filterRoom = (event)=>{
        let roomNumber = event.target.value
        console.log(roomNumber)
        let tripType = sessionStorage.getItem("tripId")
        let roomUrl;
        if (roomNumber == ""){
            roomUrl = `${rurl}/${tripType}`
        }
        else{
            roomUrl = `${rurl}/${tripType}?roomtype=${roomNumber}`
        }
        axios.get(roomUrl)
        .then(res =>{this.props.roomPerType(res.data)})
    }
    
    render(){
        return(
            <React.Fragment>
                <center>Room Type</center>
                <div className="container" onChange={this.filterRoom}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="room"/>Delux Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="room"/>Preminum Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="room"/>Travel Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="room"/>Semi Delux Room
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default RoomFilter