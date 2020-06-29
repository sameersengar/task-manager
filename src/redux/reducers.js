import {FILTER_ALL} from './actionTypes';
import { ADD_TASK, TOGGLE_TASK, SET_FILTER } from './actionTypes';

const initialTaskState = {
    nextId: 2,
    data:
    {
        1: {
            content: 'Content 1',
            completed: false
        }
    }
}

export const tasks = (state = initialTaskState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return (
                {
                    ...state,
                    data: {
                        ...state.data,
                        [state.nextId]: {
                            completed: false,
                            content: action.payload.content
                        },
                    },

                    nextId: state.nextId + 1
                }
            )
        }
        case TOGGLE_TASK:{
            console.log(action.payload)
            return(
                {
                    ...state,
                    data:{
                        ...state.data,
                        [action.payload.id]:{
                            ...state.data[action.payload.id],
                            completed: !(state.data[action.payload.id].completed)
                        }
                    }
                }
            )
        }

        default: {
            return state
        }
    }
}


export const visibilityFilter = (state = {activeFilter: FILTER_ALL}, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return ({
                activeFilter: action.payload.filter
            })
        }

        default: {
            return state;
        }
    }
}