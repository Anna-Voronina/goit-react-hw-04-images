import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    searchValue: '',
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ searchValue: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { searchValue } = this.state;
    this.props.onSubmit(searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleFormSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={searchValue}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
