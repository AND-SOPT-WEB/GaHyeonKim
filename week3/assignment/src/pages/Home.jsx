import { useState } from 'react';
import Header from '../components/Header';
import Game from '../components/Game';
import Ranking from '../components/Ranking';
import styled from '@emotion/styled';

function Home() {
  const [isGameMode, setIsGameMode] = useState(true);
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState(0);

  return (
    <HomeContainer>
      <Header
        isGameMode={isGameMode}
        setIsGameMode={setIsGameMode}
        level={level}
        setLevel={setLevel}
        time={time}
      />
      {isGameMode ? (
        <Game
          level={level}
          setLevel={setLevel}
          time={time}
          setTime={setTime}
        />
      ) : (
        <Ranking />
      )}
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGreen}; 
  min-height: 100vh;
`;

export default Home;
