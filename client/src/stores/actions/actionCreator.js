import axios from "axios"
import { FETCH_FEEDS, FETCH_POST, FETCH_STORIES, FETCH_COMMENTS } from "./actionTypes"

const baseUrl = `http://localhost:3000/`
// const baseUrl = `https://instawebapp.up.railway.app/`

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

export const fetchComments = () => {
    return async (dispatch, getState) => {
        try {
            let { data } = await axios.get(`${baseUrl}Comment`)
            await dispatch({ type: FETCH_COMMENTS, payload:data })
        } catch (error) {
            console.log(error);            
        }
    }
}

export const postComments = (comment) => {
    return async (dispatch, getState) => {
        try {
            let { data } = await axios.post(`${baseUrl}Comment`, comment)
            return data
        } catch (error) {
            console.log(error);
        }
    }
}

export const changeLike = (id) => {
    return async (dispatch, getState) => {
        try {
            let { data } = await axios.put(`${baseUrl}Post`, {id})
            return data
        } catch (error) {
            console.log(error);
        }
    }
}
