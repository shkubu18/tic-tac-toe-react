import { useEffect, useState } from "react";
import styled from "styled-components";
import O_LOGO from "../../assets/icon-o.svg";
import X_LOGO from "../../assets/icon-x.svg";
import { GameBoardProps } from "../../types/GameBoardProps";
import ScoreInfo from "./ScoreInfo";
import RestartInfo from "./RestartInfo";
import WinnerStatus from "./WinnerStatus";
import Board from "./Board";
import Header from "./Header";

export default function GameBoard(props: GameBoardProps) {
  const { pickedPlayer, playingAgainst } = props;
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [winningCells, setWinningCells] = useState<Array<number> | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  const [player, setPlayer] = useState("X");
  const [isRestartClicked, setIsRestartClicked] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (playingAgainst === "CPU" && pickedPlayer === "O" && player === "X") {
      setTimeout(() => {
        const index = getComputerMove();
        handleCellClick(index);
      }, 1000);
    } else if (
      playingAgainst === "CPU" &&
      pickedPlayer === "X" &&
      player === "O"
    ) {
      setTimeout(() => {
        const index = getComputerMove();
        handleCellClick(index);
      }, 1000);
    }
  }, [player, status]);

  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board: Array<string | null>) => {
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinningCells([a, b, c]);
        return board[a];
      }
    }

    if (board.every((cell: string | null) => cell !== null)) {
      return "tie";
    }

    return null;
  };

  const handleCellClick = (index: number) => {
    const newBoard = [...board];
    if (winner || newBoard[index]) {
      return;
    }

    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === "X" ? "O" : "X");
    setWinner(checkWinner(newBoard));
  };

  const renderCell = (index: number) => {
    const isWinner = winningCells && winningCells.includes(index);

    return (
      <Cell
        isWinner={isWinner}
        player={player}
        onClick={() => handleCellClick(index)}
      >
        {board[index] === "X" ? (
          <img src={X_LOGO} alt="icon-x" />
        ) : board[index] === "O" ? (
          <img src={O_LOGO} alt="icon-o" />
        ) : null}
      </Cell>
    );
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
    setWinningCells(null);
  };

  const getComputerMove = () => {
    const emptyCells = board.reduce(
      (acc: number[], cell: string | null, index: number) => {
        if (!cell) {
          acc.push(index);
        }

        return acc;
      },
      []
    );

    const opponent = player === "X" ? "O" : "X"; // define opponent variable

    // try to find a winning move
    for (let i = 0; i < emptyCells.length; i++) {
      const index = emptyCells[i];
      const newBoard = [...board];
      newBoard[index] = player;

      for (let j = 0; j < winningLines.length; j++) {
        const [a, b, c] = winningLines[j];

        if (
          newBoard[a] &&
          newBoard[a] === newBoard[b] &&
          newBoard[a] === newBoard[c]
        ) {
          return index;
        }
      }
    }

    // check for opponent's winning move
    for (let i = 0; i < emptyCells.length; i++) {
      const index = emptyCells[i];
      const newBoard = [...board];
      newBoard[index] = opponent;

      for (let j = 0; j < winningLines.length; j++) {
        const [a, b, c] = winningLines[j];

        if (
          newBoard[a] &&
          newBoard[a] === newBoard[b] &&
          newBoard[a] === newBoard[c]
        ) {
          return index;
        }
      }
    }

    // if no winning move, choose a random empty cell
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
  };

  useEffect(() => {
    if (winner === "tie") {
      setStatus("It's a tie!");
    } else if (winner) {
      setStatus(`${winner} wins!`);
    }
  }, [winner]);

  return (
    <>
      <Container>
        <Header
          player={player}
          isRestartClicked={isRestartClicked}
          setIsRestartClicked={setIsRestartClicked}
        />
        <Board renderCell={renderCell} />
        <ScoreInfo
          playingAgainst={playingAgainst}
          pickedPlayer={pickedPlayer}
          winner={winner}
        />
      </Container>

      {isRestartClicked ? (
        <RestartInfo
          setIsRestartClicked={setIsRestartClicked}
          handleRestart={handleRestart}
        />
      ) : null}

      {status ? (
        <WinnerStatus
          playingAgainst={playingAgainst}
          pickedPlayer={pickedPlayer}
          player={player}
          winner={winner}
          handleRestart={handleRestart}
          setStatus={setStatus}
        />
      ) : null}
      {isRestartClicked || status ? <Background /> : null}
    </>
  );
}

interface CellProp {
  isWinner: boolean | null;
  player: string;
}

const Cell = styled.div<CellProp>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: bold;
  color: #fff;
  box-shadow: inset 0px -8px 0px #10212a;
  border-radius: 10px;
  cursor: pointer;

  background-color: ${({ isWinner, player }) =>
    isWinner && player === "O"
      ? "#31C3BD"
      : isWinner && player === "X"
      ? "#F2B137"
      : "#1f3641"};

  img {
    height: 40px;
    filter: ${({ isWinner }) =>
      isWinner
        ? "brightness(0) saturate(100%) invert(17%) sepia(18%) saturate(1084%) hue-rotate(154deg) brightness(98%) contrast(94%)"
        : null};
    @media (min-width: 750px) {
      height: 60px;
    }
  }

  &:hover {
    transition: 0.5s ease;
    transform: scale(1.05);
  }
`;

const Background = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  background: black;
  opacity: 0.5;
  z-index: 0;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 530px;
  @media (min-width: 750px) {
    justify-content: center;
    min-height: 650px;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    width: 100%;
    margin-bottom: 50px;
    margin-top: 25px;
    @media (min-width: 750px) {
      margin: 0;
      margin-bottom: 25px;
    }
    button {
      padding: 10px;
      display: flex;
      align-items: center;
      background: #a8bfc9;
      box-shadow: inset 0px -4px 0px #6b8997;
      border-radius: 5px;
      border: none;
    }
  }
`;
