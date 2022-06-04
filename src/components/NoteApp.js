import { Component } from 'react';
import { getInitialData } from '../utils/index';
import Header from './Header';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: '',
      notes: getInitialData(),
    };

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onAddNote = this.onAddNote.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onNoteSearchHandler = this.onNoteSearchHandler.bind(this);
  }

  onAddNote(note) {
    this.setState({ notes: [...this.state.notes, note] });
  }

  onDeleteNoteHandler(idNote) {
    const notes = this.state.notes.filter((note) => note.id !== idNote);
    this.setState({ notes });
  }

  onArchiveNoteHandler(idNote) {
    const notes = this.state.notes;
    const indexNote = notes.findIndex((note) => note.id === idNote);
    notes[indexNote].archived = !notes[indexNote].archived;
    this.setState({ notes });
  }

  onNoteSearchHandler(key) {
    this.setState({ ...this.state, key });
  }

  render() {
    const activeNotes = this.state.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(this.state.key.toLowerCase()) &&
        !note.archived
    );
    const archiveNotes = this.state.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(this.state.key.toLowerCase()) &&
        note.archived
    );
    return (
      <div>
        <Header onSearch={this.onNoteSearchHandler} />
        <div className="note-app__body">
          <NoteInput onAddNote={this.onAddNote} />
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={activeNotes}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchiveNoteHandler}
          />
          <h2>Arsip</h2>
          <NoteList
            notes={archiveNotes}
            onDelete={this.onDeleteNoteHandler}
            onArchive={this.onArchiveNoteHandler}
          />
        </div>
      </div>
    );
  }
}

export default NoteApp;
