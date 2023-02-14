import { FETCH_STORIES} from "../actions/actionTypes"

let initialState = {
    stories: [],
};

export default function storyReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_STORIES:
            return { ...state, stories: action.payload};
        default:
            return state;
    }
}