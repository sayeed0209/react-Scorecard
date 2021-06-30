const players = [
	{ name: "Sayeed", score: 50 },
	{ name: "Elena", score: 90 },
	{ name: "Edu", score: 85 },
	{ name: "Beron", score: 65 },
];
const Header = props => {
	return (
		<header>
			<h1>{props.title}</h1>
			<span className='stats'>Player: {props.totalPlayers}</span>
		</header>
	);
};
const Counter = props => {
	return (
		<div className='counter'>
			<button className='counter-action decrement'>-</button>
			<span className='counter-score'>{props.score}</span>
			<button className='counter-action increment'>+</button>
		</div>
	);
};
const Player = props => {
	return (
		<div className='player' id={props.playerId}>
			<span className='player-name'>{props.name}</span>
			<Counter score={props.score} />
		</div>
	);
};
const App = props => {
	return (
		<div className='scoreboard'>
			<Header title='Scoreboard' totalPlayers={props.initialPlayer.length} />
			{props.initialPlayer.map((player, index) => {
				return (
					<Player
						name={player.name}
						score={player.score}
						key={index}
						playerId={index}
					/>
				);
			})}
		</div>
	);
};
ReactDOM.render(
	<App initialPlayer={players} />,
	document.getElementById("root")
);
