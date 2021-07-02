import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";
const Header = ({ totalPlayers, title }) => {
	return (
		<header>
			<Stats totalPlayers={totalPlayers} />
			<h1>{title}</h1>
			<Stopwatch />
		</header>
	);
};
export default Header;
