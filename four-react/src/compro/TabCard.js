import React, { Component } from 'react'

export default class TabCard extends Component {
    render() {
        return (
            <div>
                <p onClick={()=>this.props.setName(this.props.addname)}>{this.props.name}</p>
                <p></p>
            </div>
        )
    }
}
