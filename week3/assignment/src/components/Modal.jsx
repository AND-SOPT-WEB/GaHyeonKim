import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

const Modal = ({ level, time, onClose }) => {
  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalContent>
        <h1>게임 종료 💥</h1>
        <p>Level : {level}</p>
        <p>소요 시간 : {time.toFixed(2)}초</p>
        <button onClick={onClose}>확인</button>
      </ModalContent>
    </ModalContainer>,
    document.body
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  padding: 3rem 5rem;
  border-radius: 8px;
  text-align: center;

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.4rem;
  }

  button {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    border: none;
    border-radius: 4px;
    padding:  0.4rem 1rem;
    color: white;
    margin-top: 0.6rem;

  
  }
`;

export default Modal;
