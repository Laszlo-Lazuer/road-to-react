import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  componentDidMount() {
    this.input.focus();
  }

  render() {
    const {
      value,
      onChange,
      onSubmit,
      children
    } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          ref={(node) => { this.input = node;}}
        />
        <button type="submit">
          {children}
        </button>
      </form>
    );
  }
}

  Search.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

export default Search;
