import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [
      {
        id: uuid.v4(),
        task: 'Learn Webpack'
      },
      {
        id: uuid.v4(),
        task: 'Learn React'
      },
      {
        id: uuid.v4(),
        task: 'Do laundry'
      }
      ]
    };
  }
  render() {
    const notes = this.state.notes;

    return (
      <div>
      <button className="add-note" onClick={this.addNote.bind(this)}>+</button>
      <Notes items={notes} onEdit={this.editNote.bind(this)} />
      </div>
      );
  }
  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }
  editNote(noteId, task) {
    console.log('note edited', noteId, task);
  }
}
