import React, { Component } from 'react'
import Students from './Students'

class Roster extends Component {
    render() {
        // console.log(this)
        console.log(this.props.students)
        const students = this.props.students.map((student, idx) => {
            return (
                <Students
                key={`student-${idx}`}
                student={student}
                name={student.name}
                bio={student.bio}
                />
                )
            })
            console.log(students)
        return (
            <div>
                {students}
                
            </div>
        )
    }
}

export default Roster