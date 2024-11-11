import { useState } from 'react';
import styled from '@emotion/styled';
import Input from '../../components/common/Input';
import { Theme } from '../../styles/theme';
import Button from '../../components/common/Button';

const Login = () => {
  const [loginData, setLoginData] = useState({
    id: '',
    password: '',
  });

  const [isValid, setIsValid] = useState({
    id: true,
    password: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`아이디: ${loginData.id}\n비밀번호: ${loginData.password}`);
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>로그인</Title>
        <Input
          placeholder="아이디"
          type="text"
          name="id"
          value={loginData.id}
          isValid={isValid.id}
          errorMessage="아이디를 입력해 주세요."
          onChange={handleChange}
        />
        <Input
          placeholder="비밀번호"
          type="password"
          name="password"
          value={loginData.password}
          isValid={isValid.password}
          errorMessage="비밀번호를 입력해 주세요."
          onChange={handleChange}
        />
        <Button type="submit">로그인</Button>
        <SignUpLink href="/signup">회원가입</SignUpLink>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${Theme.colors.background};
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 550px; 
  gap: 1rem;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 2rem;
`;

const SignUpLink = styled.a`
  font-size: 0.875rem;
  color: ${Theme.colors.primaryDark};
  margin-top: 0.6rem;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
`;
