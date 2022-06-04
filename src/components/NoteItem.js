import { Component } from 'react';
import { showFormattedDate } from '../utils/index';

class NoteItem extends Component {
  constructor(props) {
    super(props);

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(idNote) {
    this.props.onDelete(idNote);
  }

  onArchiveHandler(idNote) {
    this.props.onArchive(idNote);
  }

  render() {
    const { id, title, body, createdAt, archived } = this.props;
    return (
      <div className="note-item">
        <div className="note-item__content">
          <h2 className="note-item__title">{title}</h2>
          <p className="note-item__date">{showFormattedDate(createdAt)}</p>
          <p className="note-item__body">{body}</p>
        </div>
        <div className="note-item__action">
          <button
            className="note-item__delete-button"
            onClick={() => this.onDeleteHandler(id)}
          >
            Hapus
          </button>
          <button
            className="note-item__archive-button"
            onClick={() => this.onArchiveHandler(id)}
          >
            {archived ? 'Batal Arsip' : 'Arsipkan'}
          </button>
        </div>
      </div>
    );
  }
}

export default NoteItem;
