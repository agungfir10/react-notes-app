import React from 'react';

function Header({ onSearch }) {
  const [keyword, setKeyword] = React.useState('');

  const onChange = (e) => {
    setKeyword(e.target.value);
    onSearchHandler(e.target.value);
  };

  const onSearchHandler = (keyword) => {
    onSearch(keyword);
  };
  return (
    <nav className="note-app__header">
      <h1>Note App</h1>
      <input
        className="note-search"
        type="text"
        value={keyword}
        onChange={onChange}
      />
    </nav>
  );
}

export default Header;
