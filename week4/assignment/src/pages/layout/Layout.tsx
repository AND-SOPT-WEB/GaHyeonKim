import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Theme } from '../../styles/theme';

const Layout = () => {
  return (
    <StyledMain>
      <Outlet/>
    </StyledMain>
  )
}

export default Layout;

const StyledMain = styled.main`
  height: 100vh;
  background-color: ${Theme.colors.background};
`;