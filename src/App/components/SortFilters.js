import React from 'react'

const SortFilters = ({label, className, order, filter, onClick,  query}) => (
  <div className={className} onClick={() => onClick(filter, order, query)}>{ label }</div>
)
export default SortFilters
