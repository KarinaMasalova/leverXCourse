import React, { Component } from 'react'

export default class Password extends Component {
    render() {
        return (
            <div className="password">
                <label htmlFor="password">Password</label>
                <input
                    id="authorization-password"
                    type="password"
                    placeholder="Enter password"
                    name="password" required
                    // onChange={this.props.onChange}
                />
            </div>
        )
    }
}
