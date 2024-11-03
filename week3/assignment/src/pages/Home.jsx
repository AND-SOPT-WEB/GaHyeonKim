import { useState } from 'react';
import Header from '../components/Header';
import Game from '../components/Game';

function Home() {
  const [isGameMode, setIsGameMode] = useState(true);
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState(0);

  return (
    <>
      <Header
        isGameMode={isGameMode}
        setIsGameMode={setIsGameMode}
        level={level}
        setLevel={setLevel}
        time={time}
      />
      {isGameMode && (
        <Game
          level={level}
          setLevel={setLevel}
          time={time}
          setTime={setTime}
        />
      )}
    </>
  );
}

export default Home;
