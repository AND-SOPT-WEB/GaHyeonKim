import styled from '@emotion/styled';

const Timer = ({ time }) => {
  return (
    <TimerContainer>
      {time.toFixed(2)}
    </TimerContainer>
  );
};

const TimerContainer = styled.span`
  font-size: 1.4rem;
  color: white;
  width: 4rem;
`;

export default Timer;
