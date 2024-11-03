import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Ranking = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('gameRecords')) || [];
    setRecords(storedRecords);
  }, []);

  return (
    <RankingContainer>
      <h1>랭킹</h1>
      <Table>
        <thead>
          <tr>
            <th>타임스탬프</th>
            <th>레벨</th>
            <th>플레이 시간</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.currentTime}</td>
              <td>Level {record.level}</td>
              <td>{record.playTime} 초</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </RankingContainer>
  );
};

const RankingContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin: 0 auto;
  margin-top: 5rem;
  gap: 1rem;
  background-color: white;
  padding: 3rem;
  border-radius: 6px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);

  & h1 {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid ${({ theme }) => theme.colors.midGreen};
    padding: 0.8rem;
    text-align: center;
  }

  th {
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: white;
  }
`;

export default Ranking;