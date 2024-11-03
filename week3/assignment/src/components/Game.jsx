import styled from "@emotion/styled";
import { useState, useEffect } from "react";

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
        alert(`게임 끝~~\n소요 시간: ${time.toFixed(2)}초`); 
        setIsTimerRunning(false); 

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



        // alert 닫히고 0.1초 뒤에 resetGame 호출
        // 다른 방법으로 새 게임을 불러오는건 안될까 ?????
        setTimeout(resetGame, 100);
        setIsEnd(true);
      } else {
        setNextNum(clickedNumber + 1);
        const updatedRound = [...firstRound];

        // clickedNumber > roundMax => 두 번째 라운드임을 의미
        updatedRound[clickedIndex] = clickedNumber > roundMax ? "" : secondRound[clickedIndex];
        setFirstRound(updatedRound);
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
