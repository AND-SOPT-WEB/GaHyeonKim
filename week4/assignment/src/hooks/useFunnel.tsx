import { ReactElement, ReactNode, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const useFunnel = (defaultStep: string) => {
  const [step, setStep] = useState(defaultStep);
  const navigate = useNavigate();
  const { step: urlStep } = useParams<{ step: string }>();

  useEffect(() => {
    if (urlStep) {
      setStep(urlStep);
    }
  }, [urlStep]);


  const nextStep = (nextStep: string) => {
    setStep(nextStep);
    navigate(`/signup/${nextStep}`);
  };

  const Step = (props: StepProps): ReactElement => {
    return <>{props.children}</>;
  };

  // 여러 단계의 Step 컴포넌트 중 현재 활성화된 스텝을 렌더링하는 Funnel
  // find를 통해 Step 중 현재 Step을 찾아 렌더링
  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);
    
    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, nextStep, currentStep: step } as const;
};