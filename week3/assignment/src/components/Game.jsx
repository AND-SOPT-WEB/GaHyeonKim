import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import Modal from './Modal';

const Game = ({ level, setLevel, time, setTime }) => {
  const [firstRound, setFirstRound] = useState([]);
  const [secondRound, setSecondRound] = useState([]);
  const [nextNum, setNextNum] = useState(1);
  const [isEnd, setIsEnd] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const size = level + 2;
  const roundMax = size * size;

  const getRandomArray = (min, max, length) => {
    const arr = new Set();
    while (arr.size < length) {
      arr.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(arr);
  };

  const resetGame = () => {
    const firstNumArr = getRandomArray(1, roundMax, roundMax);
    const secondRoundArr = getRandomArray(roundMax + 1, roundMax * 2, roundMax);

    setFirstRound(firstNumArr);
    setSecondRound(secondRoundArr);
    setNextNum(1);
    setIsEnd(false);
    setTime(0);
    setIsTimerRunning(false);
  };

  useEffect(() => {
    resetGame();
  }, [level]);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10); // 0.01초 간격으로 업데이트
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const handleNumberClick = (clickedNumber, clickedIndex) => {
    if (clickedNumber === nextNum) {
      if (nextNum === 1) {
        setIsTimerRunning(true);
      }
  
      const maxNum = roundMax * 2;
  
      if (clickedNumber === maxNum) {
        setIsTimerRunning(false);
        setIsEnd(true);
  
        // 정보 저장
        const currentTime = new Date().toLocaleString();
        const newRecord = {
          currentTime: currentTime,
          level: level,
          playTime: time.toFixed(2),
        };
  
        const records = JSON.parse(localStorage.getItem("gameRecords")) || [];
        records.push(newRecord);
        localStorage.setItem("gameRecords", JSON.stringify(records));
      } else {
        setNextNum(clickedNumber + 1);
  
        setFirstRound((prevRound) =>
          prevRound.map((num, index) => {
            // 클릭된 인덱스에 해당하는 숫자만 교체
            if (index === clickedIndex) {
              return clickedNumber > roundMax ? "" : secondRound[clickedIndex];
            }
            return num;
          })
        );
      }
    }
  };


  return (
    <GameContainer>
      <NextNum>다음 숫자: {nextNum}</NextNum>
      <GridContainer size={size}>
        {firstRound.map((num, index) => (
          num === "" ? (
            <Empty key={index} />
          ) : (
            <NumberButton
              key={index}
              onClick={() => handleNumberClick(num, index)}
            >
              {num}
            </NumberButton>
          )
        ))}
      </GridContainer>
      {isEnd && <Modal level={level} time={time} onClose={resetGame} />}
    </GameContainer>
  );
};

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.size}, 1fr);
  gap: 0.5rem;
  margin-top: 2.2rem;
`;

const NumberButton = styled.button`
  width: 5rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.midGreen};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  cursor: pointer;
  &:active {
    opacity: 0.6;
  }
`;

const Empty = styled.div`
  width: 5rem;
  height: 5rem;
`;

const NextNum = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;

export default Game;
