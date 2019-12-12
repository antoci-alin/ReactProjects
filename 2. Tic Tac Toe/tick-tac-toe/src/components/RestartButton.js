import React from "react";

const RestartButton = ({ onClick }) => {
	return (
		<button className="restart" onClick={onClick}>
			Play again
		</button>
	);
};

export default RestartButton;
