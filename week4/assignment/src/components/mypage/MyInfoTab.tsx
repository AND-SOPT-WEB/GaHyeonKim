import { useState } from 'react';
import styled from '@emotion/styled';
import { Theme } from '../../styles/theme';
import Input from '../common/Input';
import Button from '../common/Button';
import { putMyInfo } from '../../apis/putMyInfo';
import { useNavigate } from 'react-router-dom';

const MyInfoTab = () => {
  const [newPassword, setNewPassword] = useState<string>(''); 
  const [newHobby, setNewHobby] = useState<string>(''); 
  const navigate = useNavigate();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHobby(e.target.value);
  };


  const handleUpdate = async () => {
    if (!newHobby && !newPassword) {
      alert('값을 입력해주세요.');
      return;
    }
  
    try {
      const response = await putMyInfo({ hobby: newHobby, password: newPassword });
      alert('사용자 정보가 업데이트 되었습니다.');
      navigate('/login');
      
    } catch (err: any) {
      if (err.response?.status === 400 && err.response?.data?.code === '00') {
        alert('8자 이하로 입력해주세요.');
      } else {
        alert('오류가 발생했습니다. 다시 시도해주세요.');
      }
    }
  };
  

  return (
    <MyInfoTabContainer>
      <MyInfoTabSection>
        <Title>내 정보 수정하기</Title>

        <PwdSection>
          <h2>새 비밀번호</h2>
          <Input
            type="password"
            value={newPassword}
            name="newPassword"
            onChange={handlePasswordChange}
          />
        </PwdSection>

        <HobbySection>
          <h2>새 취미</h2>
          <Input
            type="text"
            value={newHobby}
            name="newHobby"
            onChange={handleHobbyChange}
          />
          <Button type="button" onClick={handleUpdate}>수정하기</Button>
        </HobbySection>
      </MyInfoTabSection>
    </MyInfoTabContainer>
  );
};

export default MyInfoTab;

const MyInfoTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; 
  height: 100%;

  & p {
    font-size: 1.1rem;
    color: ${Theme.colors.brown};
  }

  & h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const MyInfoTabSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 550px;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const PwdSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const HobbySection = styled.section`
  display: flex;
  flex-direction: column;

  & h2 {
    margin-bottom: 0.8rem;
  }

  & button {
    margin-top: 0.6rem;
  }

  & p {
    margin-top: 0.8rem;
  }
`;
