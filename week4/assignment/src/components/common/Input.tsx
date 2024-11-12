import { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { Theme } from "../../styles/theme";
import { useState } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type: string;
  value: string | number;
  name: string;
  placeholder?: string;
  errorMessage?: string;
  isValid?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPwd?: boolean;
}

const Input = ({
  type,
  value,
  name,
  placeholder,
  errorMessage,
  isValid,
  onChange,
  showPwd = false,
}: InputProps) => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const inputType = showPwd && isPwdVisible ? "text" : type;

  const togglePwdVisibility = () => {
    setIsPwdVisible(!isPwdVisible);
  };

  return (
    <InputContainer>
      <InputLayout>
        <InputWrapper>
          <StyledInput
            placeholder={placeholder}
            type={inputType}
            value={value}
            id={name}
            name={name}
            onChange={onChange}
          />
          {showPwd && (
            <ShowPwdButton onClick={togglePwdVisibility}>
              {inputType === "text" ? "Hide" : "Show"}
            </ShowPwdButton>
          )}
        </InputWrapper>
      </InputLayout>
      {!isValid && errorMessage && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const ErrorMessage = styled.div`
  color: ${Theme.colors.error};
  font-size: 0.87rem;
  padding-left: 0.2rem;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 0.4rem 1.1rem;
  height: 50px;
  border: 1px solid ${Theme.colors.border};
  border-radius: 4px;
  width: 100%; 
  box-sizing: border-box;
  
  &:focus {
    outline: none;
  }
`;

const ShowPwdButton = styled.button`
  background: none;
  border: none;
  color: ${Theme.colors.primary};
  cursor: pointer;
  font-size: 0.7rem;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;
