import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <label htmlFor="login">Login (email)</label>
                <input
                    id="authorization-login"
                    type="text"
                    placeholder="Enter email"
                    name="login" required
                    // onChange={this.props.onChange}
                />
            </div>
        )
    }
}
