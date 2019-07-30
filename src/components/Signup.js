import React, { Component } from 'react'

export class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:''
        }
    }

    handleChange = (e)=>{

        this.setState({
            username:e.target.value
        })

    }

    handleSubmit = (e)=>{
         e.preventDefault();
         this.props.onSubmit(this.state.username);
    }

    render() {
        return (
            <div className="form-container">
                <h1>Let's Talk</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="email">What is your email?</label>

                <input type="email" name="username" onChange={this.handleChange} className="input"/>
                <button className="submit">Submit</button>

                    </form>
            </div>
        )
    }
}

export default Signup