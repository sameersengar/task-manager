import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';

function AddTask({ addTask }) {
    const [value, setValue] = useState('');

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }
    const handleAdd = () => {
        setValue('');
        addTask(value);
    }

    return (
        <>
            <input type="text" onChange={handleOnChange} value={value} placeholder="You text here" />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}

export default connect(null, { addTask })(AddTask)