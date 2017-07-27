import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchData } from '../actions/index'
import DataListRender from '../components/DataListRender'
import PaginationComponent from './PaginationComponent'

class DataList extends Component{
  constructor(props){
    super(props)

      this.state ={
        currentPage: 1,
        listPerPage: 10
      }

      this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount(){
    this.props.fetchData();
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render(){
    if(this.props.data.length === 0){
      return <div className="error"> Oops nothing matched your search term</div>
    }

    return (
      <div className="List-container">
        <PaginationComponent />
        <DataListRender List={this.props.data} />
      </div>
           )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.all,
    filter : state.filter,
    order : state.order
  }
}

export default connect(mapStateToProps,{ fetchData })(DataList)
