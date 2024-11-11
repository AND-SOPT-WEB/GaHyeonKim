import React from 'react';
import { FunnelProps, StepProps } from '../../hooks/useFunnel';
import StepId from './StepId';
import StepPwd from './StepPwd';
import StepHobby from './StepHobby';
import styled from '@emotion/styled';
import { Theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

export interface SignUpInterface {
  steps: string[];
  nextClickHandler: (nextStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

const SignUp = ({ nextClickHandler, Funnel, Step }: SignUpInterface) => {
  return (
    <SignUpContainer>
      <Title>회원가입</Title>
      <Funnel>
        <Step name="1">
          <StepId onNext={() => nextClickHandler("2")} />
        </Step>

        <Step name="2">
          <StepPwd onNext={() => nextClickHandler("3")} />
        </Step>

        <Step name="3">
          <StepHobby />
        </Step>
      </Funnel>
      <p>
        이미 회원이신가요? <StyledLink to="/login">로그인</StyledLink>
      </p>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${Theme.colors.background};

  & p {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  color: ${Theme.colors.primaryDark};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;