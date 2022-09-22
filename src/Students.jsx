import React, { Component } from 'react'
import Scores from './Scores'

class Students extends Component {
    render() {
        console.log(this.props.student)
        return (
            <div>
                <Scores
                date={this.props.student.scores.date}
                score={this.props.student.scores.score}
                />
            </div>
        )
    }
}

export default Students