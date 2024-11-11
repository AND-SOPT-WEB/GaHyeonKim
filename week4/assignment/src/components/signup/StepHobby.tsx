import React, { useState } from 'react';
import Input from '../common/Input';
import styled from '@emotion/styled';
import Button from '../common/Button';

const StepHobby = () => {
  const [hobby, setHobby] = useState('');

  const handleNext = () => {
  };

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHobby(value);
  };

  return (
    <StepIdContainer>
      <h2>취미</h2>
      <Input
        type="text"
        value={hobby}
        name="bobby"
        placeholder="취미를 입력하세요"
        onChange={handleHobbyChange}
      />
      <Button type='button' onClick={handleNext} disabled={!hobby}>
        회원가입
      </Button>
    </StepIdContainer>
  );
};


export default StepHobby;

const StepIdContainer = styled.div`
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
