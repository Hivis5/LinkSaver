import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';

import {linksReducers} from './reducers/linksReducers';
import { sidebarReducer } from './reducers/sidebarReducer';
const reducer = combineReducers({
  links: linksReducers,
  currentSidebar:sidebarReducer
})

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;