import { FETCH_DATA, SEARCH_TERM, SET_SORT_FILTER, SET_PAGE_FILTER } from '../actions/index'

const INITIAL_STATE = { all: [], filter:'', order:'', query:'', limit: 10 , page_no: 1 }

export const DataReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type){
    case FETCH_DATA:
        return { ...state, all: action.payload }

    case SEARCH_TERM:
        return { ...state, all: action.payload.package, query: action.payload.query }

    case SET_SORT_FILTER:
        return { ...state, all: action.payload.package, filter: action.payload.filter, order: action.payload.order }

    case SET_PAGE_FILTER:
        return { ...state, all: action.payload.package, filter: action.payload.filter, order: action.payload.order, page_no:'' }

    default:
      return state
  }
}
