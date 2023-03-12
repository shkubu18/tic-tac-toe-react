import { Link } from "react-router-dom";
import styled from "styled-components";
import { PickGameModeProps } from "../../types/PickGameModeProps";

export default function PickGameMode(props: PickGameModeProps) {
  const { setPlayingAgainst } = props;

  return (
    <>
      <Link to="gameboard">
        <Button
          className="CPU"
          style={{ marginTop: 30 }}
          onClick={() => setPlayingAgainst("CPU")}
        >
          NEW GAME (VS CPU)
        </Button>
      </Link>
      <Link to="gameboard">
        <Button
          className="PLAYER"
          onClick={() => setPlayingAgainst("PLAYER")}
          style={{
            margin: 0,
          }}
        >
          NEW GAME (VS PLAYER)
        </Button>
      </Link>
    </>
  );
}

const Button = styled.button`
  width: 100%;
  border-radius: 15px;
  height: 55px;
  color: #1a2a33;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  border: none;
  margin-block: 20px;
  cursor: pointer;

  box-shadow: ${({ className }) =>
    className === "CPU"
      ? "inset 0px -8px 0px #cc8b13"
      : "inset 0px -8px 0px #118C87"};

  background-color: ${({ className }) =>
    className === "CPU" ? "#f2b137" : "#31C3BD"};

  &:hover {
    transition: 0.5s ease;
    background-color: ${({ className }) =>
      className === "CPU" ? "#FFC860" : "#65E9E4"};
  }
`;
