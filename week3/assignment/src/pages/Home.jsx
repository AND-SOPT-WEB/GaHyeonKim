import { useState } from 'react';
import Header from '../components/Header';
import Game from '../components/game/Game';

function Home() {
  const [isGameMode, setIsGameMode] = useState(true);
  
  return (
    <>
      <Header isGameMode={isGameMode} setIsGameMode={setIsGameMode} />
      {isGameMode ? <Game level={1} /> : <div>랭킹</div>}
    </>
  );
}

export default Home;