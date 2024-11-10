import styled from '@emotion/styled';
import Timer from './Timer';

const Header = ({ isGameMode, setIsGameMode, level, setLevel, time }) => {
  return (
    <HeaderContainer>
      <section>
        <h1>1 to 50 💨</h1>
        <BtnContainer>
          <StyledButton 
            onClick={() => setIsGameMode(true)} 
            isActive={isGameMode}
          >
            게임
          </StyledButton>
          <StyledButton 
            onClick={() => setIsGameMode(false)} 
            isActive={!isGameMode}
          >
            랭킹
          </StyledButton>
        </BtnContainer>
      </section>
      {isGameMode && (
        <section>
          <LevelSelect value={level} onChange={(e) => setLevel(parseInt(e.target.value, 10))}>
            <option value={1}>Level 1</option>
            <option value={2}>Level 2</option>
            <option value={3}>Level 3</option>
          </LevelSelect>
          <Timer time={time} />
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
  padding: 0 4rem;
  height: 6.5rem;

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
`;

const StyledButton = styled.button`
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.midGreen : theme.colors.darkGreen)};
  border: none;
  padding: 0.4rem 1rem;
  font-size: 1.1rem;
  color: white;
  border-radius: 4px;
`;

const LevelSelect = styled.select`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
`;