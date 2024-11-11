import { useParams } from 'react-router-dom';
import { useFunnel } from '../../hooks/useFunnel';
import SignUp from '../../components/signup/SignUp';
import { useEffect } from 'react';

const steps = ['name', 'password', 'hobby'];

const SignUpPage = () => {
  const { step } = useParams<{ step: string }>();

  const { Funnel, Step, nextStep, setStep } = useFunnel(step || steps[0]);

  useEffect(() => {
    if (step) {
      setStep(step); 
    }
  }, [step, setStep]);

  return (
    <section>
      <SignUp
        steps={steps}
        nextClickHandler={nextStep}
        Funnel={Funnel}
        Step={Step}
      />
    </section>
  );
};

export default SignUpPage;