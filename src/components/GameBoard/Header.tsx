import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import RestartIcon from "../../assets/icon-restart.svg";
import O_LOGO from "../../assets/icon-o.svg";
import X_LOGO from "../../assets/icon-x.svg";
import { HeaderProps } from "../../types/GameBoard/HeaderProps";

export default function Header(props: HeaderProps) {
  const { player, isRestartClicked, setIsRestartClicked } = props;

  return (
    <Container>
      <img src={Logo} alt="logo" />
      <TurnInfo>
        {player === "X" ? <Img src={X_LOGO} /> : <Img src={O_LOGO} />}
        <p>TURN</p>
      </TurnInfo>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => setIsRestartClicked(!isRestartClicked)}
      >
        <img src={RestartIcon} alt="restart icon" />
      </button>
    </Container>
  );
}

const Img = styled.img`
  height: 16px;
  filter: brightness(0) saturate(100%) invert(88%) sepia(18%) saturate(267%)
    hue-rotate(153deg) brightness(86%) contrast(82%);
  @media (min-width: 750px) {
    height: 20px;
  }
`;

const Container = styled.header`
  button {
    &:hover {
      transition: 0.5s ease;
      background-color: #dbe8ed;
    }
  }
`;

const TurnInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 15px;
  text-align: center;
  letter-spacing: 0.875px;
  font-size: 14px;
  color: #a8bfc9;
  background: #1f3641;
  box-shadow: inset 0px -4px 0px #10212a;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  margin-right: 5px;
  p {
    font-weight: 700;
  }
  @media (min-width: 750px) {
    width: 140px;
    padding-inline: 30px;
    height: 50px;
    font-size: 16px;
  }
`;
