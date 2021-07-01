import React from "react";
class Counter extends React.Component {
	state = {
		score: 0,
	};

	onPlusButtonClick = () => {
		this.setState(prevState => {
			return {
				score: ++prevState.score,
			};
		});
	};
	onMinusButtonClick = () => {
		this.setState(prevState => {
			if (prevState.score > 0) {
				return { score: --prevState.score };
			}
		});
	};

	render() {
		return (
			<div className='counter'>
				<button
					className='counter-action decrement'
					onClick={this.onMinusButtonClick}
				>
					-
				</button>
				<span className='counter-score'>{this.state.score}</span>
				<button
					className='counter-action increment'
					onClick={this.onPlusButtonClick}
				>
					+
				</button>
			</div>
		);
	}
}

export default Counter;
