import React, { Component } from 'react';

export class TabList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null
		};

		this.select = this.select.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.selected == null) {
		  let defaultTab = React.Children.toArray(this.props.children).map((child) => child.props.name)[0];

		  React.Children.forEach(this.props.children, (child) => {
				if (child.props.default) {
					defaultTab = child.props.name;
				}
		  });

		  this.setState({
				selected: defaultTab
		  });
		}
	}

	select(item) {
		this.setState({
			selected: item
		});
	}

	render() {
		console.log("children: ", this.props.children);
		const tabs = React.Children.map(this.props.children, (child) => {
			const className = (child.props.name === this.state.selected) ? "selected" : "unselected";

			return (
				<h1 onClick={(e) => this.select(child.props.name)} className={className}>{child.props.name}</h1>
			);
		});

		let body;
		React.Children.forEach(this.props.children, (child) => {
		  if (child.props.name === this.state.selected) {
				body = child;
		  }
		});

		const direction = this.props.horizontal ? "horizontal" : "vertical";

		return (
			<div className={`holder ${direction}`}>
				<div className={`tabs ${direction}`}>
					{tabs}
				</div>
				<div className={`body ${direction}`}>
					{body}
				</div>
			</div>
		);
	}
}

export class Tab extends Component {
	render () {
		return this.props.children;
	}
}
