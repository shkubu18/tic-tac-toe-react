import styled from "styled-components";
import X_Logo from "../../assets/icon-x.svg";
import O_Logo from "../../assets/icon-o.svg";
import { PickPlayerProps } from "../../types/PickPlayer/PickPlayerProps";
import { ChoiceProps } from "../../types/PickPlayer/ChoiceProps";

export default function PickPlayer(props: PickPlayerProps) {
  const { pickedPlayer, setPickedPlayer } = props;

  return (
    <ChoiceContainer>
      <h1>PICK PLAYER 1'S MARK</h1>
      <Choice pickedPlayer={pickedPlayer}>
        <div className="xmark-container" onClick={() => setPickedPlayer("X")}>
          <img className="xmark-img" src={X_Logo} alt="x mark" />
        </div>
        <div className="omark-container" onClick={() => setPickedPlayer("O")}>
          <img className="omark-img" src={O_Logo} alt="o mark" />
        </div>
      </Choice>
      <p>REMEMBER: X GOES FIRST</p>
    </ChoiceContainer>
  );
}

const Choice = styled.div<ChoiceProps>`
  width: 100%;
  background: #1a2a33;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-block: 10px;
  img {
    height: 30px;
  }
  div {
    width: 50%;
    background-color: black;
    border-radius: 10px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 7px;
    cursor: pointer;
    transition: 0.5s ease;
  }
  .xmark-container {
    background-color: ${({ pickedPlayer }) =>
      pickedPlayer === "O" ? "#1A2A33" : "#A8BFC9"};
    &:hover {
      background-color: ${({ pickedPlayer }) =>
        pickedPlayer === "O" ? "rgba(168, 191, 201, 0.05);" : null};
    }
    img {
      filter: ${({ pickedPlayer }) =>
        pickedPlayer === "O"
          ? "brightness(0) saturate(100%) invert(88%) sepia(18%) saturate(267%) hue-rotate(153deg) brightness(86%) contrast(82%)"
          : "brightness(0) saturate(100%) invert(8%) sepia(48%) saturate(798%) hue-rotate(158deg) brightness(87%) contrast(82%);"};
    }
  }
  .omark-container {
    background-color: ${({ pickedPlayer }) =>
      pickedPlayer === "X" ? "#1A2A33" : "#A8BFC9"};
    &:hover {
      background-color: ${({ pickedPlayer }) =>
        pickedPlayer === "X" ? "rgba(168, 191, 201, 0.05);" : null};
    }
    img {
      filter: ${({ pickedPlayer }) =>
        pickedPlayer === "X"
          ? "brightness(0) saturate(100%) invert(88%) sepia(18%) saturate(267%) hue-rotate(153deg) brightness(86%) contrast(82%)"
          : "brightness(0) saturate(100%) invert(8%) sepia(48%) saturate(798%) hue-rotate(158deg) brightness(87%) contrast(82%);"};
    }
  }
`;

const ChoiceContainer = styled.div`
  width: 100%;
  background: #1f3641;
  box-shadow: inset 0px -8px 0px #10212a;
  border-radius: 15px;
  padding: 20px;
  h1 {
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    color: #a8bfc9;
    margin-bottom: 15px;
  }
  p {
    color: #a8bfc9;
    opacity: 0.5;
    margin-top: 15px;
    font-size: 14px;
    letter-spacing: 0.875px;
    font-weight: 500;
  }
`;
