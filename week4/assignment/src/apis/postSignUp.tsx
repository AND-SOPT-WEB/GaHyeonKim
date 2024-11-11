import { useState } from 'react';
import axios from 'axios';

interface PostUserRequest {
  username: string;
  password: string;
  hobby: string;
}

interface PostUserResponse {
  result?: { no: number };
  code?: string;
}

export const postSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PostUserResponse | null>(null);

  const postUser = async (user: PostUserRequest) => {
    try {
      setLoading(true);

      const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/user`, user);

      if (response.data?.result) {
        setData(response.data);
        return response.data.result.no;
      }

      return null;
    } catch (err: any) {
      throw err; // 에러는 컴포넌트에서 처리하기 위함인데 이렇게 해도 되나 ?
    } finally {
      setLoading(false);
    }
  };

  return { postUser, loading, data };
};
