import React, { useState } from "react";
import Square from "./Square";
import calculateWinner from "../functions/calculateWinner";
import isBoardFull from "../functions/isBoardFull";
import RestartButton from "./RestartButton";

const Board = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isXNext, setIsXNext] = useState(true);
	const winner = calculateWinner(squares);

	const renderSquare = i => {
		return (
			<Square
				value={squares[i]}
				onClick={() => {
					if (squares[i] != null || winner != null) return;

					const nextSquares = squares.slice();
					nextSquares[i] = isXNext ? "X" : "O";
					setSquares(nextSquares);

					setIsXNext(!isXNext);
				}}
			/>
		);
	};

	const getStatus = () => {
		if (winner) {
			return "Winner: " + winner;
		} else if (isBoardFull(squares)) {
			return "Draw!";
		} else {
			return "Next player: " + (isXNext ? "X" : "O");
		}
	};

	const renderRestartButton = () => {
		return (
			<RestartButton
				onClick={() => {
					setSquares(Array(9).fill(null));
					setIsXNext(true);
				}}
			/>
		);
	};

	return (
		<div className="container">
			<div className="game">
				<div className="game-board">
					<div className="board-row">
						{renderSquare(0)}
						{renderSquare(1)}
						{renderSquare(2)}
					</div>
					<div className="board-row">
						{renderSquare(3)}
						{renderSquare(4)}
						{renderSquare(5)}
					</div>
					<div className="board-row">
						{renderSquare(6)}
						{renderSquare(7)}
						{renderSquare(8)}
					</div>
				</div>
				<div className="game-info">{getStatus()}</div>
				<div className="restart-button">{renderRestartButton()}</div>
			</div>
		</div>
	);
};

export default Board;
