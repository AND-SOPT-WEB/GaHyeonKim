import styled from '@emotion/styled';
import { Theme } from '../../styles/theme';

interface ButtonProps {
  type: 'button' | 'submit'
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({ type, onClick, disabled, children }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 100%;
  height: 54px;
  padding: 0.4rem 1.1rem;
  border: none;
  border-radius: 4px;
  background-color: ${Theme.colors.primary};
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, cursor 0.3s ease;

  &:hover {
    background-color: ${Theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${Theme.colors.border};
    cursor: not-allowed;
  }
`;
