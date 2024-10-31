import styled from '@emotion/styled';

const Card = ({ num, isClicked, onClick }) => {
  return (
    <GameCard isClicked={isClicked} onClick={onClick}>
      {isClicked ? num : num}
    </GameCard>
  );
};

export default Card;

const GameCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
  width: 7rem;
  height: 7rem;
  border: none;
  color: white;
  font-size: 1.2rem;
  background-color: ${({ isClicked, theme }) =>
    isClicked ? theme.colors.darkGreen : theme.colors.midGreen};
  cursor: pointer;
`;
