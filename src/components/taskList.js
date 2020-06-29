import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { FILTER_ALL, FILTER_COMPLETED } from '../redux/actionTypes';
import { toggleTask } from '../redux/actions';

const Task = ({ task, id, toggleTask }) => (
    <li className={task.completed ? 'completed' : ''} onClick={() => toggleTask(id)}>{task.content}</li>
)

function TaskList({ tasks, toggleTask }) {
    return (
        _.keys(tasks).map((id) => (
            <Task key={id} id={id} toggleTask={toggleTask} task={tasks[id]} />
        ))
    )
}

const mapState = (state) => {
    if (state.visibilityFilter.activeFilter === FILTER_ALL) {
        return { tasks: state.tasks.data }
    } else if (state.visibilityFilter.activeFilter === FILTER_COMPLETED) {
        return ({
            tasks: _.pick(state.tasks.data, (task) => task.completed)
        })
    } else {
        return ({
            tasks: _.pick(state.tasks.data, (task) => !task.completed)
        })
    }
}

export default connect(mapState, { toggleTask })(TaskList);