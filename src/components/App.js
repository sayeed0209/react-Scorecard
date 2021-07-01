import React from "react";
import "./App.css";
import Header from "./Header";
import Player from "./Player";

class App extends React.Component {
	state = {
		players: [
			{ name: "Sayeed", id: 1, score: 0 },
			{ name: "Elena", id: 2, score: 0 },
			{ name: "Edu", id: 3, score: 0 },
			{ name: "Beron", id: 4, score: 0 },
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
							score={player.score}
						/>
					);
				})}
			</div>
		);
	}
}
export default App;
