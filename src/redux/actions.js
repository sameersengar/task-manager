import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, SET_FILTER } from './actionTypes'

export const addTask = (content) => (
    {
        type: ADD_TASK,
        payload: {
            content
        }
    }
)

export const toggleTask = (id) => (
    {
        type: TOGGLE_TASK,
        payload: {
            id
        }
    }
)

export const deleteTask = (id) => (
    {
        type: DELETE_TASK,
        payload: {
            id
        }
    }
)

export const setFilter = (filter) => (
    {
        type: SET_FILTER,
        payload: {
            filter
        }
    }
)