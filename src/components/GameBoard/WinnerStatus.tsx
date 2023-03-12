import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, ButtonsContainer } from "./RestartInfo";
import O_LOGO from "../../assets/icon-o.svg";
import X_LOGO from "../../assets/icon-x.svg";
import { WinnerStatusProps } from "../../types/GameBoard/WinnerStatusProps";

export default function WinnerStatus(props: WinnerStatusProps) {
  const {
    playingAgainst,
    pickedPlayer,
    player,
    winner,
    handleRestart,
    setStatus,
  } = props;

  return (
    <Container>
      <GameAndInfo winner={winner}>
        {winner === "tie"
          ? "ROUND TIED"
          : playingAgainst === "CPU" && pickedPlayer === "O" && player === "O"
          ? "OH NO, YOU LOST.."
          : playingAgainst === "CPU" && pickedPlayer === "X" && player === "X"
          ? "OH NO, YOU LOST.."
          : playingAgainst === "CPU" && pickedPlayer === "X" && player === "O"
          ? "YOU WON!"
          : playingAgainst === "CPU" && pickedPlayer === "O" && player === "X"
          ? "YOU WON!"
          : playingAgainst === "PLAYER" && winner === "X"
          ? "PLAYER 1 WINS!"
          : playingAgainst === "PLAYER" && winner === "O"
          ? "PLAYER 2 WINS!"
          : null}
      </GameAndInfo>
      <WinnerInfo player={player}>
        {winner === "X" ? (
          <img src={X_LOGO} alt="x logo" />
        ) : winner === "O" ? (
          <img src={O_LOGO} alt="o logo" />
        ) : null}
        {winner !== "tie" ? <h2>TAKES THE ROUND</h2> : null}
      </WinnerInfo>
      <ButtonsContainer>
        <Link to="/">
          <Button className="greyBtn">QUIT</Button>
        </Link>
        <Button
          className="orangeBtn"
          onClick={() => {
            handleRestart();
            setStatus(null);
          }}
        >
          NEXT ROUND
        </Button>
      </ButtonsContainer>
    </Container>
  );
}

interface WinnerInfoProps {
  player: string;
}

const WinnerInfo = styled.div<WinnerInfoProps>`
  display: flex;
  margin-top: 15px;
  margin-bottom: 25px;

  img {
    height: 28px;
    margin-right: 10px;
    @media (min-width: 760px) {
      height: 60px;
    }
  }
  h2 {
    color: ${(props) => (props.player !== "X" ? "#31C3BD" : "#F2B137")};
    @media (min-width: 760px) {
      font-size: 40px;
      margin-left: 20px;
    }
  }
`;

interface GameEndInfoProps {
  winner: string | null;
}

const GameAndInfo = styled.h4<GameEndInfoProps>`
  color: #a8bfc9;
  font-size: ${(props) => (props.winner === "tie" ? "35px" : "15px")};
  letter-spacing: 0.875px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 50px;
  background: #1f3641;
  z-index: 2;
  position: absolute;
`;
