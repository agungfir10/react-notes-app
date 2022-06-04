import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onChange(e) {
    this.setState({ key: e.target.value });
    this.onSearchHandler(e.target.value);
  }

  onSearchHandler(key) {
    this.props.onSearch(key);
  }
  render() {
    return (
      <nav className="note-app__header">
        <h1>Note App</h1>
        <input
          className="note-search"
          type="text"
          value={this.state.key}
          onChange={this.onChange}
        />
      </nav>
    );
  }
}

export default Header;
