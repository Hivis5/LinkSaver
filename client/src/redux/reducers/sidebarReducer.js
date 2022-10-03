import * as actionTypes from '../actions/type';


export const sidebarReducer = (state = actionTypes.ALL_LINKS, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_SIDEBAR:
            return action.selected
        default: 
            return state;
    }
}