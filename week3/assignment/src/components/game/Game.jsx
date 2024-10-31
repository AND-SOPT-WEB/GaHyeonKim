import styled from '@emotion/styled';
import Card from './Card';
import { useState, useEffect } from 'react';

const Game = ({ level }) => {
  const gridSize = parseInt(level) + 2;
  const CardNum = gridSize * gridSize; 
  const totalCardNum = 2 * gridSize;
  const [cards, setCards] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [usedNumbers, setUsedNumbers] = useState([]); // 이미 사용된 숫자 저장

  const shuffledCards = () => {
    const NumsArr = new Set();
    
    while (NumsArr.size < CardNum) {
      NumsArr.add(Math.floor(Math.random() * CardNum) + 1);
    }

    const Nums = Array.from(NumsArr);
    const tempArr = Nums.map((num) => ({ num, isClicked: false }));
    setCards(tempArr);
  };


  const handleCardClick = (clickedNum) => {
    // 현재 클릭된 숫자가 nextNumber와 일치하면
    if (clickedNum === nextNumber) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.num === clickedNum ? { ...card, isClicked: true } : card
        )
      );


      setUsedNumbers((prev) => [...prev, clickedNum]); // 사용된 숫자 추가
      setNextNumber((prev) => prev + 1); // 다음 숫자로 증가

      // 랜덤 숫자 생성 (clickedNum에 따라서)
      const availableNumbers = Array.from({ length: CardNum }, (_, i) => i + 1)
        .filter(num => !usedNumbers.includes(num) && num > CardNum);
      
      console.log('availableNumbers : ', availableNumbers);
      if (availableNumbers.length > 0) {
        const randomNum = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
        console.log(randomNum); 
        setNextNumber(randomNum);
      }

    } else {
      console.log('잘못된 숫자 클릭함');
    }
  };

  useEffect(() => {
    shuffledCards();
  }, []);

  return (
    <GameContainer>
      <h1>다음 숫자 : {nextNumber}</h1>
      <GameGrid columns={gridSize}>
        {cards.map((card) => (
          <Card 
            key={`card-${card.num}`} 
            num={card.num} 
            isClicked={card.isClicked} 
            onClick={() => handleCardClick(card.num)}
          />
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
