import styled from "styled-components";
import Logo_IMG from "../../assets/logo.svg";
import { HomeProps } from "../../types/HomeProps";
import PickPlayer from "./PickPlayer";
import PickGameMode from "./PickGameMode";

export default function Home(props: HomeProps) {
  const { setPickedPlayer, pickedPlayer, setPlayingAgainst } = props;

  return (
    <Container>
      <Logo src={Logo_IMG} alt="logo" />
      <PickPlayer
        pickedPlayer={pickedPlayer}
        setPickedPlayer={setPickedPlayer}
      />
      <PickGameMode setPlayingAgainst={setPlayingAgainst} />
    </Container>
  );
}

const Logo = styled.img`
  margin-bottom: 20px;
  @media (max-height: 450px) {
    margin-top: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  a {
    text-decoration: none;
    width: 100%;
  }
  @media (min-width: 510px) {
    max-width: 470px;
  }
`;
