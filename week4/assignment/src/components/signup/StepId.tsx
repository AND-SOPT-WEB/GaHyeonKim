import React, { useState } from 'react';
import Input from '../common/Input';
import styled from '@emotion/styled';
import Button from '../common/Button';

const StepId = ({ onNext }: { onNext: () => void }) => {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNext = () => {
    if (name && isValid) {
      onNext();
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    if (value.length > 8) {
      setIsValid(false);
      setErrorMessage('이름은 8자 이하로 입력해주세요.');
    } else {
      setIsValid(true);
      setErrorMessage('');
    }
  };

  return (
    <StepIdContainer>
      <h2>이름</h2>
      <Input
        type="text"
        value={name}
        name="name"
        placeholder="이름을 입력하세요"
        onChange={handleNameChange}
        isValid={isValid}
        errorMessage={errorMessage}
      />
      <Button type='button' onClick={handleNext} disabled={!name || !isValid}>
        다음
      </Button>
    </StepIdContainer>
  );
};


export default StepId;

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
