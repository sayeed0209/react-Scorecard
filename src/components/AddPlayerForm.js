import React from "react";
class AddPlayerForm extends React.Component {
	state = { value: "" };
	onInputChange = e => {
		this.setState({ value: e.target.value });
	};
	onSubmitAddPlayer = e => {
		e.preventDefault();
		this.props.addPlayer(this.state.value);
		this.setState({ value: "" });
	};

	render() {
		return (
			<form onSubmit={this.onSubmitAddPlayer}>
				<input
					type='text'
					placeholder='Enter a Player Name'
					value={this.state.value}
					onChange={this.onInputChange}
				/>
				<input type='submit' value='Add Player' />
			</form>
		);
	}
}
export default AddPlayerForm;
