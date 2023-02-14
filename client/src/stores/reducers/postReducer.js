import { FETCH_FEEDS, FETCH_POST} from "../actions/actionTypes"

let initialState = {
    feeds: [],
    post: {},
};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FEEDS:
            return { ...state, feeds: action.payload};
        case FETCH_POST:
            return { ...state, post: action.payload};
        default:
            return state;
    }
}