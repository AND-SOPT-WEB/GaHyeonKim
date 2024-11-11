import React, { useState } from 'react';
import Input from '../common/Input';
import styled from '@emotion/styled';
import Button from '../common/Button';
import { useSignUpContext } from '../../context/SignUpContext';
import { postSignUp } from '../../apis/postSignUp';
import { useNavigate } from 'react-router-dom';

const StepHobby = () => {
  const { state, handleHobby } = useSignUpContext();
  const [hobby, setHobby] = useState('');
  const navigate = useNavigate();

  const { postUser, loading } = postSignUp();

  const handleSubmit = async () => {

    try {
      const memberNo = await postUser({
        username: state.id,
        password: state.password,
        hobby: hobby,
      });

      if (memberNo) {
        alert(`회원가입이 완료되었습니다🥳 회원번호: ${memberNo}`);
        navigate('/login');
      }
    } catch (err: any) {
      if (err.response?.status === 409) {
        alert('아이디가 중복되었습니다.');
      } else {
        alert('요청 중 오류가 발생했습니다.');
      }
    }
  };

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHobby(value);
    handleHobby(value);
  };

  return (
    <StepHobbyContainer>
      <h2>취미</h2>
      <Input
        type="text"
        value={hobby}
        name="hobby"
        placeholder="취미를 입력하세요"
        onChange={handleHobbyChange}
      />
      <Button 
        type='button' 
        onClick={handleSubmit} 
        disabled={loading || !hobby}
      >
        회원가입
      </Button>
    </StepHobbyContainer>
  );
};

export default StepHobby;

const StepHobbyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 550px; 
  gap: 1rem;

  & h2 {
    margin-bottom: 0.4rem;
    padding-left: 0.2rem;
  }
`;