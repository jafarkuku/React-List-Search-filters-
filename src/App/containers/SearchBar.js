import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchTerm } from '../actions/index'
import SearchInput from '../components/SearchInput'

class SearchBar extends Component{
  constructor(props){
    super(props)

    this.state = {
      term: ''
    }
  }

  onInputChange(e){
    this.setState ({
      term: e.target.value
    })
    this.props.searchTerm(e.target.value, this.state.filter, this.state.order)
  }

  render(){
    return (
        <SearchInput  placeholder="Enter search term here"
                      value={this.state.term}
                      onChange={this.onInputChange.bind(this)} />
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.all,
    filter: state.filter,
    order: state.order,
    query: state.query
  }
}

export default connect(mapStateToProps, { searchTerm })(SearchBar)
