import React from 'react';
import styled from '@emotion/styled';
import { Theme } from '../../styles/theme';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  setIsHobbyTab: (isHobby: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsHobbyTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // 토큰 삭제
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Nav>
        <Title>마이페이지</Title>
        <MenuItem onClick={() => setIsHobbyTab(true)}>취미</MenuItem>
        <MenuItem onClick={() => setIsHobbyTab(false)}>내 정보</MenuItem>
      </Nav>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${Theme.colors.primaryDark};
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.8rem;
  align-items: center;

  & > div:first-of-type {
    margin-left: 0.5rem;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  background: ${Theme.colors.primary};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.5rem 0;
`;
