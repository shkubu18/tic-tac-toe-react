import styled from "styled-components";
import { RestartInfoProps } from "../../types/GameBoard/RestartInfoProps";

export default function RestartInfo(props: RestartInfoProps) {
  const { setIsRestartClicked, handleRestart } = props;

  return (
    <Container>
      <h2>RESTART GAME?</h2>
      <ButtonsContainer>
        <Button className="greyBtn" onClick={() => setIsRestartClicked(false)}>
          NO, CANCEL
        </Button>
        <Button
          className="orangeBtn"
          onClick={() => {
            handleRestart();
            setIsRestartClicked(false);
          }}
        >
          YES, RESTART
        </Button>
      </ButtonsContainer>
    </Container>
  );
}

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Button = styled.button`
  padding: 12px;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  color: #1a2a33;
  letter-spacing: 1px;
  font-size: 17px;
  height: 52px;
  cursor: pointer;

  background-color: ${({ className }) =>
    className === "greyBtn" ? "#A8BFC9" : "#F2B137"};

  box-shadow: ${({ className }) =>
    className === "greyBtn"
      ? "inset 0px -4px 0px #6B8997"
      : "inset 0px -4px 0px #CC8B13"};

  ${({ className }) =>
    className === "greyBtn" ? "margin-right: 10px" : "margin-left: 10px"};

  &:hover {
    transition: 0.5s ease;
    background-color: ${({ className }) =>
      className === "greyBtn" ? "#DBE8ED" : "#FFC860"};
  }
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
  h2 {
    color: #a8bfc9;
    font-size: 24px;
    letter-spacing: 1.5px;
    margin-bottom: 22px;
  }
`;
