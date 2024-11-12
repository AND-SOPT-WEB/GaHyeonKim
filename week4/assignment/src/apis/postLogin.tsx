import { useState } from 'react';
import axios from 'axios';

interface PostLoginRequest {
  username: string;
  password: string;
}

interface PostLoginResponse {
  result?: { token: string };
  code?: string;
}

export const postLogin = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PostLoginResponse | null>(null);

  const postUserLogin = async (user: PostLoginRequest) => {
    try {
      setLoading(true);

      const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/login`, user);

      if (response.data?.result) {
        setData(response.data);
        return response.data.result.token; // 토큰 반환
      }

      return null;
    } catch (err: any) {
      throw err; 
    } finally {
      setLoading(false);
    }
  };

  return { postUserLogin, loading, data };
};
