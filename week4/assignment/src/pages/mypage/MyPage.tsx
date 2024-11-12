import { useState } from 'react';
import Header from '../../components/mypage/Header';
import HobbyTab from '../../components/mypage/HobbyTab';
import MyInfoTab from '../../components/mypage/MyInfoTab';
import styled from '@emotion/styled';

const MyPage = () => {
  const [isHobbyTab, setIsHobbyTab] = useState(true);

  return (
    <MyPageContainer>
      <Header setIsHobbyTab={setIsHobbyTab} />
      <Content>{isHobbyTab ? <HobbyTab /> : <MyInfoTab />}</Content>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
