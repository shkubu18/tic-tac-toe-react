export interface HomeProps {
  setPickedPlayer: React.Dispatch<React.SetStateAction<string>>;
  pickedPlayer: string;
  setPlayingAgainst: React.Dispatch<React.SetStateAction<string | null>>;
}
