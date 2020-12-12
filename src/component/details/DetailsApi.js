import React ,{Component} from 'react'
import axios from 'axios' 
import DetailsDisplay from './DetailsDisplay'


const  url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class DetailsApi extends Component {
  constructor(){
      super()
      this.state = {
          hotels : ""
      }
  }

  render(){
      return(
          <React.Fragment>
              <DetailsDisplay hotelData={this.state.hotels}></DetailsDisplay>
          </React.Fragment>
      )
  }

  async componentDidMount(){
      var hotelId = this.props.match.params.id

      let response = await axios.get(`${url}/${hotelId}`)
    //   console.log(response.data)
    this.setState({hotels : response.data[0]})
  }
}

export default DetailsApi;