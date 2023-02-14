import { FETCH_FEEDS, FETCH_POST, FETCH_STORIES} from "./actionTypes"

const baseUrl = `http://localhost:3000/`

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(`${baseUrl}post`, {method: 'get'})
            if (!response.ok) throw({name: "Error in fetching posts"})

            let payload = await response.json()
            await dispatch({ type: FETCH_FEEDS, payload})
        } catch (error) {
            console.log(error);            
        }
    }
}

export const fetchStories = () => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(`${baseUrl}story`, {method: 'get'})
            if (!response.ok) throw({name: "Error in fetching stories"})

            let payload = await response.json()
            await dispatch({ type: FETCH_STORIES, payload})
        } catch (error) {
            console.log(error);            
        }
    }
}

export const fetchPostById = (id) => {
    return async (dispatch, getState) => {
        try {
            let response = await fetch(`${baseUrl}post/1`, {method: 'get'})
            if (!response.ok) throw({name: `Error in fetching post with id:${id}`})

            let payload = await response.json()
            await dispatch({ type: FETCH_POST, payload})
        } catch (error) {
            console.log(error);            
        }
    }
}