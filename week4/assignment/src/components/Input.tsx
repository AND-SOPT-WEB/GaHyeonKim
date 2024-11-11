import { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { Theme } from "../styles/theme";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type: string;
  value: string | number;
  name: string;
  placeholder?: string;
  errorMessage?: string;
  isValid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  value,
  name,
  placeholder,
  errorMessage,
  isValid,
  onChange,
}: InputProps) => {

  return (
    <InputContainer>
      <InputLayout>
        <StyledInput
          placeholder={placeholder}
          type={type}
          value={value}
          id={name}
          name={name}
          onChange={onChange}
        />
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
`;

const StyledInput = styled.input`
  padding: 0.4rem 1.1rem;
  height: 40px;
  border: 1px solid ${Theme.colors.border};
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;
