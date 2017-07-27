import axios from 'axios'

export const FETCH_DATA ='FETCH_DATA'
export const SEARCH_TERM = 'SEARCH_TERM'
export const SET_SORT_FILTER = 'SET_SORT_FILTER'
export const SET_PAGE_FILTER = 'SET_PAGE_FILTER'

const ROOT_URL = 'http://localhost:3003/files'

export const fetchData= () => dispatch =>axios.get(`${ROOT_URL}?_limit=10`)
        .then((response) => dispatch(
          {
            type: FETCH_DATA,
            payload: response.data
          })
    )

export const searchTerm = ( query, filter, order ) => dispatch => axios.get(`${ROOT_URL}?q=${query}&_limit=10&_sort=${filter}&_order=${order}&_page=`)
        .then((response) => dispatch(
          {
            type: "SEARCH_TERM",
            payload: {
              package: response.data ,
              filter,
              order,
              query
            }
          })
    )


export const searchPage = (query, filter, order, pageNo) => dispatch => axios.get(`${ROOT_URL}?q=${query}&_limit=10&_sort=${filter}&_order=${order}&_page=${pageNo}`)
        .then((response) => dispatch(
          {
            type: SET_SORT_FILTER,
            payload: {
              package: response.data ,
              filter,
              order,
              pageNo
            }
          })
    )


export const setSortFilter2 = (filter, order, query) => {
  if(query !== undefined){
    return dispatch => axios.get(`${ROOT_URL}?q=${query}&_limit=10&_sort=${filter}&_order=${order}`)
        .then((response) => dispatch(
          {
            type: SET_SORT_FILTER,
            payload: {
              package: response.data,
              filter:filter,
              order: order,
              query: query
            }
          })
        )} else if(query !== '') {
              console.log('query is ', query)
          return dispatch => axios.get(`${ROOT_URL}?q=${query}&_limit=10&_sort=${filter}&_order=${order}`)
          .then((response) => dispatch(
            {
              type: SET_SORT_FILTER,
              payload: {
                package: response.data,
                filter,
                order,
                query
              }
            })
          )
        }
}
