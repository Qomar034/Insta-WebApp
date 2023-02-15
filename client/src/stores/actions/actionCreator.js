import axios from "axios"
import { FETCH_FEEDS, FETCH_POST, FETCH_STORIES} from "./actionTypes"

const baseUrl = `http://localhost:3000/`

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        try {
            let { data } = await axios.get(`${baseUrl}Post`)
            await dispatch({ type: FETCH_FEEDS, payload: data})
        } catch (error) {
            console.log(error);            
        }
    }
}

export const fetchStories = () => {
    return async (dispatch, getState) => {
        try {
            let { data } = await axios.get(`${baseUrl}Story`)
            await dispatch({ type: FETCH_STORIES, payload: data})
        } catch (error) {
            console.log(error);            
        }
    }
}

export const fetchPostById = (id) => {
    return async (dispatch, getState) => {
        try {
            let { data } = await axios.get(`${baseUrl}Post/${id}`)
            await dispatch({ type: FETCH_POST, payload:data})
        } catch (error) {
            console.log(error);            
        }
    }
}