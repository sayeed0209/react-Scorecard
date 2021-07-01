import React from "react";
import "./App.css";
const Header = props => {
	return (
		<header>
			<h1>{props.title}</h1>
			<span className='stats'>Player: {props.totalPlayers}</span>
		</header>
	);
};
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
const Player = props => {
	console.log(props.removePlayer);
	return (
		<div className='player'>
			<span className='player-name'>
				<button
					className='remove-player'
					onClick={() => props.removePlayer(props.id)}
				>
					x
				</button>
				{props.name}
			</span>
			<Counter />
		</div>
	);
};
class App extends React.Component {
	state = {
		players: [
			{ name: "Sayeed", id: 1 },
			{ name: "Elena", id: 2 },
			{ name: "Edu", id: 3 },
			{ name: "Beron", id: 4 },
		],
	};
	handleRemovePlayer = id => {
		this.setState(prevState => {
			return {
				players: prevState.players.filter(player => player.id !== id),
			};
		});
	};

	render() {
		return (
			<div className='scoreboard'>
				<Header title='Scoreboard' totalPlayers={this.state.players.length} />
				{this.state.players.map(player => {
					return (
						<Player
							name={player.name}
							key={player.id.toString()}
							id={player.id}
							removePlayer={this.handleRemovePlayer}
						/>
					);
				})}
			</div>
		);
	}
}
export default App;
