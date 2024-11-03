import styled from '@emotion/styled';

const Header = ({ isGameMode, setIsGameMode, level, setLevel }) => {
  return (
    <HeaderContainer>
      <section>
        <h1>1 to 50 💨</h1>
        <BtnContainer>
          <button onClick={() => setIsGameMode(true)}>게임</button>
          <button onClick={() => setIsGameMode(false)}>랭킹</button>
        </BtnContainer>
      </section>
      {isGameMode && (
        <section>
          <LevelSelect value={level} onChange={(e) => setLevel(parseInt(e.target.value, 10))}>
            <option value={1}>Level 1</option>
            <option value={2}>Level 2</option>
            <option value={3}>Level 3</option>
          </LevelSelect>
          <div>타이머</div>
        </section>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.darkGreen};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;

  & section {
    display: flex;
    gap: 3.5rem;
    align-items: center;
  }

  & h1 {
    color: white;
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;

  & button {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    border: none;
    padding: 0.4rem 1rem;
    font-size: 1.1rem;
    color: white;
  }

  & button:focus {
    background-color: ${({ theme }) => theme.colors.midGreen};
    border-radius: 6px;
  }
`;

const LevelSelect = styled.select`
  padding: 0.5rem 1rem;;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
`;
