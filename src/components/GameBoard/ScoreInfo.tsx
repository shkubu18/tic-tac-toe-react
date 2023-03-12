import { useEffect, useState } from "react";
import styled from "styled-components";
import { ScoreInfoProps } from "../../types/GameBoard/ScoreInfoProps";

export default function ScoreInfo(props: ScoreInfoProps) {
  const { playingAgainst, pickedPlayer, winner } = props;

  const [tieQty, setTieQty] = useState<number>(0);
  const [oQty, setOQty] = useState<number>(0);
  const [xQty, setXQty] = useState<number>(0);

  useEffect(() => {
    if (winner === "tie") {
      setTieQty(tieQty + 1);
    } else if (winner === "X") {
      setXQty(xQty + 1);
    } else if (winner === "O") {
      setOQty(oQty + 1);
    }
  }, [winner]);

  return (
    <Container>
      <ScoreInforContainer className="X">
        <p>
          {playingAgainst === "CPU" && pickedPlayer === "O"
            ? "X (CPU)"
            : playingAgainst === "CPU" && pickedPlayer === "X"
            ? "X (YOU)"
            : "X (P1)"}
        </p>
        <h2>{xQty}</h2>
      </ScoreInforContainer>
      <ScoreInforContainer className="TIE">
        <p>TIES</p>
        <h2>{tieQty}</h2>
      </ScoreInforContainer>
      <ScoreInforContainer className="O">
        <p>
          {playingAgainst === "CPU" && pickedPlayer === "O"
            ? "O (YOU)"
            : playingAgainst === "CPU" && pickedPlayer === "X"
            ? "O (CPU)"
            : "O (P2)"}
        </p>
        <h2>{oQty}</h2>
      </ScoreInforContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 20px;
  justify-content: space-between;
`;

const ScoreInforContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.25px;
  color: #1a2a33;
  font-size: 14px;
  border-radius: 10px;
  padding-block: 10px;
  background-color: ${({ className }) =>
    className === "X"
      ? "#31C3BD"
      : className === "TIE"
      ? "#A8BFC9"
      : "#F2B137"};
`;
