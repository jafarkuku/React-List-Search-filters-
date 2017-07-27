import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ButtonToolbar, DropdownButton } from 'react-bootstrap'
import { css, StyleSheet } from 'aphrodite';

import { setSortFilter2 } from '../actions/index'
import SortFilters from '../components/SortFilters'

const styles = StyleSheet.create({
  ButtonToolBar:{
    width: '100%',
    float: 'right'
  },
  SortButton: {
    float: 'right',
    width: '100%',
    height: 50
  },
  SortItem: {
    height: 37,
    padding: '9px 20px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#ed1c2e',
      color: 'white'
    }
  }
});

class SortButton extends Component{
  render(){
    return (
      <ButtonToolbar className={css(styles.ButtonToolBar)}>
        <DropdownButton className={css(styles.SortButton)} title="Sort" id="dropdown-size-medium">
          <SortFilters className={css(styles.SortItem)} order='DESC' filter='size' onClick={this.props.setSortFilter2}  label="File Size: High to Low" query={this.props.query} />
          <SortFilters className={css(styles.SortItem)} order='ASC' filter='size' onClick={this.props.setSortFilter2}  label="File Size: Low to High" query={this.props.query} />
          <SortFilters className={css(styles.SortItem)} order='DESC' filter='created' onClick={this.props.setSortFilter2}  label="Newest" query={this.props.query} />
          <SortFilters className={css(styles.SortItem)} order= 'ASC' filter='created' onClick={this.props.setSortFilter2}  label="Oldest" query={this.props.query} />
        </DropdownButton>
    </ButtonToolbar>
    )
  }
}

const mapStateToProps = state => {

  return {
    query: state.data.query
  }
}


export default connect(mapStateToProps, { setSortFilter2 })(SortButton)
