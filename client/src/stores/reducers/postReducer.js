import { FETCH_FEEDS, FETCH_POST, FETCH_COMMENTS } from "../actions/actionTypes"

let initialState = {
    feeds: [],
    post: {},
    comments: [],
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FEEDS:
            return { ...state, feeds: action.payload};
        case FETCH_POST:
            return { ...state, post: action.payload};
        case FETCH_COMMENTS:
            return { ...state, comments: action.payload};
        default:
            return state;
    }
}