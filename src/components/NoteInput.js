import autoBind from 'auto-bind';
import React, { Component } from 'react';

class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    autoBind(this);
  }

  onTitleChangeHandler(e) {
    const limit = 50;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: e.target.value.slice(0, limit),
      };
    });
  }

  onBodyChangeHandler(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: e.target.value,
      };
    });
  }

  onSubmitNote(e) {
    e.preventDefault();
    const { title, body } = this.state;
    if (title === '' || title === null) {
      alert('Judul tidak boleh kosong');
      return;
    }
    if (body === '' || body === null) {
      alert('Body tidak boleh kosong');
      return;
    }
    const note = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date(),
      isArchived: false,
    };

    this.props.onAddNote(note);
    this.setState({ title: '', body: '' });
  }
  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa karakter : {50 - this.state.title.length}
        </p>
        <form onSubmit={this.onSubmitNote}>
          <input
            type="text"
            className="note-input__title"
            name="title"
            placeholder="Ini adalah judul..."
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
          <textarea
            type="text"
            className="note-input__body"
            name="body"
            placeholder="Tuliskan catatanmu disini..."
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
