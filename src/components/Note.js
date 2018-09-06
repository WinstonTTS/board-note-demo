import React, { Component } from 'react';
import '../css/Note.css';

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      body: this.props.body,
      editMode: false,
    }
  }

  handleEdit() {
    this.setState({
      editMode: true
    })
  }

  handleSave() {
    this.setState({
      title: this.refs.titleContent.value,
      body: this.refs.bodyContent.value,
      editMode: false
    })
  }

  render() {
    let titleElement
    let bodyElement
    let buttonArea
    if (this.state.editMode) {
      titleElement = <textarea ref="titleContent" className="title-textarea" defaultValue={this.state.title}></textarea>;
      bodyElement = <textarea ref="bodyContent" className="body-textarea" defaultValue={this.state.body}></textarea>;
      buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
    } else {
      titleElement = <h5>{this.state.title}</h5>;
      bodyElement = <p>{this.state.body}</p>;
      buttonArea = <div>
        <button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button>
        <button onClick={this.props.deleteNote} className="btn btn-danger">Delete</button>
      </div>;
    }

    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            {titleElement}
            {bodyElement}
            {buttonArea}
          </div>
        </div>
      </div>
    );
  }
}

Note.defaultProps = {
  title: 'Default Title',
  body: 'Default Body'
}

export default Note
