import { useState } from 'react';
import Header from '../../components/mypage/Header';
import HobbyTab from '../../components/mypage/HobbyTab';
import MyInfoTab from '../../components/mypage/MyInfoTab';

const MyPage = () => {
  const [isHobbyTab, setIsHobbyTab] = useState(true);

  return (
    <div>
      <Header setIsHobbyTab={setIsHobbyTab} />
      {isHobbyTab ? <HobbyTab /> : <MyInfoTab />}
    </div>
  );
};

export default MyPage;
