import styled from "styled-components";

interface BoardProps {
  renderCell: (index: number) => JSX.Element;
}

export default function Board(props: BoardProps) {
  const { renderCell } = props;

  return (
    <Container>
      {renderCell(0)}
      {renderCell(1)}
      {renderCell(2)}
      {renderCell(3)}
      {renderCell(4)}
      {renderCell(5)}
      {renderCell(6)}
      {renderCell(7)}
      {renderCell(8)}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 15px;
  margin-bottom: 20px;
  @media (max-width: 340px) {
    grid-template-columns: repeat(3, 93px);
    grid-template-rows: repeat(3, 93px);
  }
  @media (min-width: 750px) {
    grid-template-columns: repeat(3, 140px);
    grid-template-rows: repeat(3, 140px);
  }
`;
