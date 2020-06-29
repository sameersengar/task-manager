import React from 'react';
import AddTask from './components/addTask';
import TaskList from './components/taskList';
import VisibilityFilter from './components/visibilityFilter';
import { Provider } from 'react-redux';
import store from './redux/store';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>Task Manager</h1>
				<AddTask />
				<TaskList />
				<VisibilityFilter />
			</div>
		</Provider>
	);
}

export default App;
