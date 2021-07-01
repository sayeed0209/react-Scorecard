import React from "react";
const Counter = props => {
	// onPlusButtonClick = () => {
	// 	this.setState(prevState => {
	// 		return {
	// 			score: ++prevState.score,
	// 		};
	// 	});
	// };
	// onMinusButtonClick = () => {
	// 	this.setState(prevState => {
	// 		if (prevState.score > 0) {
	// 			return { score: --prevState.score };
	// 		}
	// 	});
	// };

	return (
		<div className='counter'>
			<button className='counter-action decrement'>-</button>
			<span className='counter-score'>{props.score}</span>
			<button className='counter-action increment'>+</button>
		</div>
	);
};

export default Counter;
