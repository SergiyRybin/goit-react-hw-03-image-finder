import React, { Component } from 'react';
import s from '../SearchForm/SearchForm.module.css';

class SearchForm extends Component {
  state = {
    image: '',
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.image);
    this.setState({ image: '' });
  };

  fromCahnge = e => {
    const nameValue = e.currentTarget.value.toLowerCase().trim();
    this.setState({ image: nameValue });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.formSubmit}>
          <button type="submit" className={s.SearchFormbutton}>
            <span className={s.SearchFormbuttonlabel}>Search</span>
          </button>

          <input
            onChange={this.fromCahnge}
            className={s.SearchForminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchForm;
