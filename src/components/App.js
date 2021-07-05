import React from "react";
import "./App.css";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends React.Component {
	state = {
		players: [
			{ name: "Sayeed", id: 1, score: 0 },
			{ name: "Elena", id: 2, score: 0 },
			{ name: "Edu", id: 3, score: 0 },
			{ name: "Beron", id: 4, score: 0 },
		],
	};
	onPlusButtonClick = (index, delta) => {
		this.setState(prevState => {
			// New 'players' array – a copy of the previous `players` state
			const updatedPlayers = [...prevState.players];

			// A copy of the player object we're targeting
			const updatedPlayer = { ...updatedPlayers[index] };
			// Update the target player's score
			updatedPlayer.score += delta;
			// Update the 'players' array with the target player's latest score
			updatedPlayers[index] = updatedPlayer;
			// Update the `players` state without mutating the original state
			return {
				players: updatedPlayers,
			};
		});
	};
	// player id counter
	prevPlayerId = 4;
	handleRemovePlayer = id => {
		this.setState(prevState => {
			return {
				players: prevState.players.filter(player => player.id !== id),
			};
		});
	};
	handelAddPlayer = name => {
		this.setState(prevState => {
			return {
				players: [
					...prevState.players,
					{
						name: name,
						score: 0,
						id: (this.prevPlayerId += 1),
					},
				],
			};
		});
	};
	getHighScore() {
		const score = this.state.players.map(player => player.score);
		const highScore = Math.max(...score);
		if (highScore) {
			return highScore;
		}
		return null;
	}
	render() {
		const highScore = this.getHighScore();
		return (
			<div className='scoreboard'>
				<Header title='Scoreboard' totalPlayers={this.state.players} />
				{this.state.players.map((player, index) => {
					return (
						<Player
							name={player.name}
							key={player.id.toString()}
							id={player.id}
							removePlayer={this.handleRemovePlayer}
							score={player.score}
							changeScore={this.onPlusButtonClick}
							index={index}
							isHighScore={highScore === player.score}
						/>
					);
				})}
				<AddPlayerForm addPlayer={this.handelAddPlayer} />
			</div>
		);
	}
}
export default App;
