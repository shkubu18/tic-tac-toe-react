import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import GameBoard from "./components/GameBoard/GameBoard";
import { useState } from "react";

function App() {
  const [playingAgainst, setPlayingAgainst] = useState<string | null>(null);
  const [pickedPlayer, setPickedPlayer] = useState<string>("O");

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setPickedPlayer={setPickedPlayer}
              pickedPlayer={pickedPlayer}
              setPlayingAgainst={setPlayingAgainst}
            />
          }
        />
        <Route
          path="/gameboard"
          element={
            <GameBoard
              pickedPlayer={pickedPlayer}
              playingAgainst={playingAgainst}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
  }

  #root {
    min-height: 100vh;
    background: #1a2a33;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 20px;
    @media (max-height: 550px) {
      padding-bottom: 20px;
    }
  }
`;
