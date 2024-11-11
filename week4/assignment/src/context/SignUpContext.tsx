import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SignUpState {
  id: string;
  password: string;
  hobby: string;
}

interface SignUpContextType {
  state: SignUpState;
  handleId: (id: string) => void;
  handlePwd: (password: string) => void;
  handleHobby: (hobby: string) => void;
}


const SignUpContext = createContext<SignUpContextType | undefined>(undefined);

interface SignUpProviderProps {
  children: ReactNode;
}

export const SignUpProvider = ({ children } : SignUpProviderProps) => {
  const [state, setState] = useState<SignUpState>({ id: '', password: '', hobby: '' });

  const handleId = (id: string) => setState((prevState) => ({ ...prevState, id }));
  const handlePwd = (password: string) => setState((prevState) => ({ ...prevState, password }));
  const handleHobby = (hobby: string) => setState((prevState) => ({ ...prevState, hobby }));

  return (
    <SignUpContext.Provider value={{ state, handleId, handlePwd, handleHobby }}>
      {children}
    </SignUpContext.Provider>
  );
};


export const useSignUpContext = (): SignUpContextType => {
  const context = useContext(SignUpContext);
  if (!context) {
    throw new Error('useSignUpContext는 SignUpProvider 내부에서만 사용할 수 있습니다.');
  }
  return context;
};
