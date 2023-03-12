export interface WinnerStatusProps {
  playingAgainst: string | null;
  pickedPlayer: string;
  player: string;
  winner: string | null;
  handleRestart: () => void;
  setStatus: React.Dispatch<React.SetStateAction<string | null>>;
}
