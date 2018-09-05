import React, { Component } from 'react'
import Note from './Note.js'
import '../css/Board.css'

class Board extends Component {
  constructor() {
    super()
    this.state = {
      notes: [
        {
          title: "Class Notes",
          body: "Always use constructors when extending another class"
        },
        {
          title: "My New Address",
          body: "2001 N Lonhill Phoenix, AZ 81234"
        },
        {
          title: "React Notes",
          body: "Everything in React is a component"
        }
      ]
    }
  }

  addNote() {
    const newNotesArr = this.state.notes.concat({
      title: 'New Title',
      body: 'New Body',
    })

    this.setState({
      notes: newNotesArr
    })
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {this.state.notes.map((note, idx) => {
              return <Note key={idx} title={note.title} body={note.body} />
            })}
          </div>
        </div>
        <div>
          <button onClick={this.addNote.bind(this)} className="btn btn-success add-button">Add</button>
        </div>
      </div>
    )
  }
}

export default Board




