import styled from '@emotion/styled';
import Card from './Card';
import { useState, useEffect } from 'react';


const Game = ({ level }) => {
  const gridSize = parseInt(level) + 2;
  const totalCardNum = gridSize * gridSize; 
  const [cards, setCards] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);

  const shuffledCards = () => {
    const NumsArr = new Set();
    
    while (NumsArr.size < totalCardNum) {
        NumsArr.add(Math.floor(Math.random() * totalCardNum) + 1);
    }

    const Nums = Array.from(NumsArr);
    const tempArr = Nums.map((num) => ({ num, isClicked: false }));
    setCards(tempArr);
};


  useEffect(() => {
    shuffledCards();
  }, []);

  return (
    <GameContainer>
      <h1>다음 숫자 : {nextNumber}</h1>
      <GameGrid columns={gridSize}>
        {cards.map((card, index) => (
          <Card key={`card-${index}`} num={card.num} isClicked={card.isClicked} />
        ))}
      </GameGrid>
    </GameContainer>
  );
};

export default Game;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  margin: 0 auto;      
  margin-top: 5rem;
`;


const GameGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: 0.5rem;
  margin-top: 2.5rem;
`;
