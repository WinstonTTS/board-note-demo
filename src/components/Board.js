import React, { Component } from 'react'
import Note from './Note.js'
import '../css/Board.css'

class Board extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
    }
  }

  addNote() {
    const newNotesArr = this.state.notes.concat({
      id: Date.now(),
    })

    this.setState({
      notes: newNotesArr
    })
  }

  deleteNote(id) {
    const newNotesArr = this.state.notes.filter((note) => {
      return note.id !== id
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
              return <Note deleteNote={this.deleteNote.bind(this, note.id)} key={idx} title={note.title} body={note.body} />
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
