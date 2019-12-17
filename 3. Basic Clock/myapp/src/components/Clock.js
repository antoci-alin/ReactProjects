import React, { Component } from "react";
import Panel from "./Panel";
import Display from "./Display";

class Clock extends Component {
	constructor() {
		super();

		this.state = {
			date: new Date(),
			isDataVisible: true
		};

		this.toggleDate = this.toggleDate.bind(this);
	}

	componentDidMount() {
		this.startTime();
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	startTime() {
		this.timer = setInterval(() => {
			this.setState(() => ({ date: new Date() }));
		}, 1000);
	}

	toggleDate() {
		this.setState(prevState => ({
			isDataVisible: !prevState.isDataVisible
		}));
	}

	render() {
		return (
			<div>
				<Display date={this.state.date} isDateVisible={this.state.isDataVisible} />
				<Panel toggleDate={this.toggleDate} dateOn={this.state.isDataVisible} />
			</div>
		);
	}
}

export default Clock;
