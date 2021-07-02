import React from "react";

const Stats = props => {
	const totalPoint = props.totalPlayers.reduce((acum, player) => {
		return acum + player.score;
	}, 0);
	return (
		<table className='stats'>
			<tbody>
				<tr>
					<td>Players:</td>
					<td>{props.totalPlayers.length}</td>
				</tr>
				<tr>
					<td>Total Points:</td>
					<td>{totalPoint}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Stats;
