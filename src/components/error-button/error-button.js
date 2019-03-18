import React , {Component} from 'react'
import './error-button.css'


export default class ErrorButton extends Component {
    constructor() {
        super();
        this.state ={
            renderError:false,
        }
    }

    render() {
        console.log("render");
        if (this.state.renderError) {
            this.GavnoPolomal.bar = 0;
        }

        return (
            <button
                className="error-button btn btn-danger btn-lg"
                onClick = {()=> this.setState({renderError:true})}>
                Kill Me!
            </button>
        )

    }
}