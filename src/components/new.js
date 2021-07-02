const players = [
	{ name: "Sayeed", id: 1, score: 0 },
	{ name: "Elena", id: 2, score: 0 },
	{ name: "Edu", id: 3, score: 0 },
	{ name: "Beron", id: 4, score: 0 },
];

function getIndex(index) {
	const updatedPlayers = [...players];
	const indexp = (updatedPlayers[index].score = 5);
	updatedPlayers[indexp] = updatedPlayers;
	console.log(updatedPlayers);
}

getIndex(1);
