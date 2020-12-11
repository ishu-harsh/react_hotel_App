import React, {Component} from 'react'
import ListingDisplay from './ListingDisplay'

import RoomFilter from '../filters/RoomFilter'
import CostFilter from '../filters/CostFilter'

import axios from 'axios'



const ListUrl = "https://developerfunnel.herokuapp.com/hotellist"


class ListingApi  extends Component {
    constructor(){
        super()
        this.state = {
            ListData : ''
        }
    }

    setFilteredData(filteredData){
        this.setState({ListData: filteredData})
    }


    render(){
        // console.log(this.props.match.params.id)
        console.log(this.state.ListData)

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-2">
                        <RoomFilter roomPerType={data=>{this.setFilteredData(data)}}/>
                        <CostFilter costPerType={data=>[this.setFilteredData(data)]}></CostFilter>
                    </div>
                    <div className="col-md-10">
                    <ListingDisplay listRecord={this.state.ListData}> </ListingDisplay>

                    </div>

                </div>
                {/* <h1>List {this.props.match.params.id}</h1> */}
            </React.Fragment>
        )
    }

    componentDidMount(){
        const tripId = this.props.match.params.id
        sessionStorage.setItem("tripId",tripId)
        axios.get(`${ListUrl}/${tripId}`)
        .then(res=>{this.setState({ListData:res.data })})
    }
}

export default ListingApi