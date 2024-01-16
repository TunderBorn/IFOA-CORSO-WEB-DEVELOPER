import { Component } from "react"

class Image extends Component {
    render() {
    const fotoBella = {
        width: '300px',
        height: '300px',
        boxShadow: '12px 12px 2px 1px rgba(0, 0, 0, .2)',
        margin: '10px'
    }
    return (
      <img src={this.props.linkino} alt={this.props.tag} style= {fotoBella}/>
    )
  }}
  
  export default Image

  




  
    