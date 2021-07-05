import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";
class Player extends PureComponent {
	static propTypes = {
		id: PropTypes.number,
		name: PropTypes.string.isRequired,
		score: PropTypes.number.isRequired,
		changeScore: PropTypes.func,
		index: PropTypes.number,
		removePlayer: PropTypes.func,
	};
	render() {
		const { id, name, score, changeScore, index, removePlayer, isHighScore } =
			this.props;
		return (
			<div className='player'>
				<span className='player-name'>
					<button className='remove-player' onClick={() => removePlayer(id)}>
						x
					</button>
					<Icon isHighScore={isHighScore}/>
					{name}
				</span>

				<Counter score={score} changeScore={changeScore} index={index} />
			</div>
		);
	}
}
export default Player;
