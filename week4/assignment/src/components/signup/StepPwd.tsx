import React, { useState } from 'react';
import Input from '../common/Input';
import styled from '@emotion/styled';
import Button from '../common/Button';
import { useSignUpContext } from '../../context/SignUpContext';

const StepPwd = ({ onNext }: { onNext: () => void }) => {
  const { handlePwd } = useSignUpContext();
  const [pwd, setPwd] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNext = () => {
    if (pwd && confirmPassword && isValid) {
      handlePwd(pwd);
      onNext();
    }
  };

  const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPwd(value);

    if (value.length > 8) {
      setIsValid(false);
      setErrorMessage('비밀번호는 8자 이하로 입력해주세요.');
    } else if (value !== confirmPassword && confirmPassword) {
      setIsValid(false);
      setErrorMessage('비밀번호가 일치하지 않습니다.');
    } else {
      setIsValid(true);
      setErrorMessage('');
    }
  };

  const handleConfirmPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value !== pwd) {
      setIsValid(false);
      setErrorMessage('비밀번호가 일치하지 않습니다.');
    } else if (pwd.length > 8) {
      setIsValid(false);
      setErrorMessage('비밀번호는 8자 이하로 입력해주세요.');
    } else {
      setIsValid(true);
      setErrorMessage('');
    }
  };

  return (
    <StepPwdContainer>
      <h2>비밀번호 입력</h2>
      <InputContainer>
      <Input
        type="password"
        value={pwd}
        name="pwd"
        placeholder="비밀번호를 입력해주세요"
        onChange={handlePwdChange}
        isValid={isValid}
      />
      <Input
        type="password"
        value={confirmPassword}
        name="confirmPassword"
        placeholder="비밀번호 확인"
        onChange={handleConfirmPwdChange}
        isValid={isValid}
        errorMessage={errorMessage}
      />
      </InputContainer>
      <Button
        type="button"
        onClick={handleNext}
        disabled={!pwd || !confirmPassword || !isValid || pwd.length > 8 || confirmPassword.length > 8}
      >
        다음
      </Button>
    </StepPwdContainer>
  );
};

export default StepPwd;

const StepPwdContainer = styled.div`
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
