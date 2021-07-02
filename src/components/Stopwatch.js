import React from "react";

class Stopwatch extends React.Component {
	state = { isRunning: false, eleapsedTime: 0, previousTime: 0 };
	onStartButtonClick = () => {
		this.setState(prevState => {
			return { isRunning: !prevState.isRunning };
		});
		if (!this.state.isRunning) {
			this.setState({ previousTime: Date.now() });
		}
	};
	componentDidMount() {
		this.intervalId = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	tick = () => {
		if (this.state.isRunning) {
			const now = Date.now();
			this.setState(prevState => {
				return {
					previousTime: now,
					eleapsedTime: prevState.eleapsedTime + (now - prevState.previousTime),
				};
			});
		}
	};
	onResetButtonClick = () => {
		this.setState({ eleapsedTime: 0 });
	};
	render() {
		const seconds = Math.floor(this.state.eleapsedTime / 1000);
		return (
			<div className='stopwatch'>
				<h2>Stopwatch</h2>
				<span className='stopwatch-time'>{seconds}</span>
				<button onClick={this.onStartButtonClick}>
					{this.state.isRunning ? "Stop" : "Start"}
				</button>
				<button onClick={this.onResetButtonClick}>Reset</button>
			</div>
		);
	}
}

export default Stopwatch;
