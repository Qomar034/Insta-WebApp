import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import postReducer from "./reducers/postReducer";
import storyReducer from "./reducers/storyReducer";

let baseReducer = combineReducers({
    story: storyReducer,
    post: postReducer,
})

let stores = createStore(baseReducer, applyMiddleware(thunk));
export default stores