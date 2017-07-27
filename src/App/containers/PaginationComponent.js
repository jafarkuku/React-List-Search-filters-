import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Pagination } from 'react-bootstrap'

import { searchPage } from '../actions/index'

class PaginationComponent extends Component{

  constructor(props){
    super(props)
      this.state= {
        activePage: 1,
      }
  }

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    })
    this.props.searchPage(this.props.query, this.props.filter, this.props.order , this.state.activePage)
  }

  render(){
    return(
      <Pagination
        className='pagination'
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={50}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect.bind(this)} />
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.all,
    query: state.data.query,
    filter: state.data.filter,
    order: state.data.order,
    pageNo: state.data.pageNo,
    limit: state.data.limit
  }
}

export default connect (mapStateToProps, { searchPage })(PaginationComponent)
