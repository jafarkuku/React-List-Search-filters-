//@flow
import React from 'react'
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  search: {
    display: 'inline-block',
    width: '100%',
    height: 50,
    backgroundColor: '#ed1c2e',
    color: 'white',
    border: 'none',
    padding: 10,
    fontWeight: 'bold'
  }
});

const SearchInput = ({ list, placeholder, value, onChange }) => (
  <input
    placeholder={placeholder}
    className={css(styles.search)}
    value={value}
    onChange={onChange}
  />
)

SearchInput.propTypes = {
  placeholder : PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchInput
