import { Component} from "react";


class ButtonClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count, //inserire props
            nome: 'gianni',
            cognome: 'morandi',
        }
    }
    incrementCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        }) 
    }
    render() {

        const stileComp = {
            border: '3px solid yellow',
            marginLeft: '5px',
        }
        return (
            <button style={stileComp} onClick={this.incrementCount}>
               il conteggio del button class è {this.state.count}
            </button>
        )
    }
}

export default ButtonClass