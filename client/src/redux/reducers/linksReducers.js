import * as actionTypes from '../actions/type'


export const linksReducers = (state = [],action) => {
  switch(action.type){
      case actionTypes.ADDNEW_LINK:
        return [action.payload,...state]
      case actionTypes.GETALL_LINK:
        return action.payload
      case actionTypes.TOGGLE_LINK:
        return state.map(link =>(
          link._id === action.payload._id ? { ...link, visited: !link.visited} : link
        ))
      case actionTypes.UPDATE_LINK:
        return state.map(link =>(
          link._id === action.payload._id ? { ...link, data: action.payload.data} : link
        ))
      case actionTypes.DELETE_LINK:
        return state.filter(link => link._id !== action.payload._id);
      default:
        return state;

  }
}

