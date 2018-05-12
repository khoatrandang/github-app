import React from 'react';
import './App.css';
import Homepage from './Homepage.js';
import { withGithub } from './GithubApi.js';

const {clientId} = require('./env.json');

class App extends React.Component {
	render() {
		const WrappedHomePage = withGithub(Homepage, clientId);

		return (
			<WrappedHomePage />
		);
	}
}

export default App;
