import { useEffect, useState } from 'react';
import { getMyHobby } from '../../apis/getMyHobby';
import styled from '@emotion/styled';
import { Theme } from '../../styles/theme';
import Input from '../common/Input';
import Button from '../common/Button';
import { getOtherHobby } from '../../apis/getOtherHobby';

const HobbyTab = () => {
  const [hobby, setHobby] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>(''); 
  const [searchResult, setSearchResult] = useState<string | null>(null);

  useEffect(() => {
    const fetchMyHobby = async () => {
      const myHobby = await getMyHobby();
      setHobby(myHobby);
    };

    fetchMyHobby();
  }, []);

  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const fetchedHobby = await getOtherHobby(Number(userId));

      if (fetchedHobby !== null) {
        setSearchResult(`${userId}번 사용자의 취미: ${fetchedHobby}`);
      }
    } catch (err: any) { 
      if (err.response?.status === 404 && err.response?.data?.code === '01') {
        alert('존재하지 않는 사용자입니다.');
      } else {
        alert('오류가 발생했습니다. 다시 시도해주세요.');
      }
    }
  };
  

  return (
    <HobbyTabContainer>
      <HobbyTabSection>
        <Title>취미</Title>
        <MyHobbySection>
          <h2>나의 취미</h2>
          <p>{hobby}</p>
        </MyHobbySection>
        <SearchHobbySection>
          <h2>다른 사람들의 취미</h2>
          <Input
            type="text"
            value={userId}
            name="userId"
            placeholder="사용자 번호를 입력하세요"
            onChange={handleNumChange}
          />
          <Button type="button" onClick={handleSearch}>검색</Button>
          {searchResult && (
            <p>{searchResult}</p>
          )}
        </SearchHobbySection>
      </HobbyTabSection>
    </HobbyTabContainer>
  );
};

export default HobbyTab;

const HobbyTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; 
  height: 100%;

  & p {
    font-size: 1.1rem;
    color: ${Theme.colors.brown};
  }

  & h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const HobbyTabSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 550px;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const MyHobbySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const SearchHobbySection = styled.section`
  display: flex;
  flex-direction: column;

  & h2 {
    margin-bottom: 0.8rem;
  }

  & button {
    margin-top: 0.6rem;
  }

  & p {
    margin-top: 0.8rem;
  }
`;
