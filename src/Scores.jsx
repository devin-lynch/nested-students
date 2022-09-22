import React, { Component } from 'react'
import Students from './Students'

class Scores extends Component {
    render() {
        // console.log(this.props.score, this.props.date)
        return (
            <div>
                {this.props.date}
                {this.props.score}
            </div>
        )
    }
}

export default Scores