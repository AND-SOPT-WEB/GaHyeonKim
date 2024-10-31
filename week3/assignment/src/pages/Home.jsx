import { useState } from 'react';
import Header from '../components/Header';

function Home() {
  const [isGameMode, setIsGameMode] = useState(true);
  
  return (
    <>
      <Header isGameMode={isGameMode} setIsGameMode={setIsGameMode} />
      {isGameMode ? <div>게임</div> : <div>랭킹</div>}
    </>
  );
}

export default Home;