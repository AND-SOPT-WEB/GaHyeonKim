import axios from 'axios';

export const getOtherHobby = async (no: number) => {
  const token = localStorage.getItem('authToken');

  try {
    const response = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/user/${no}/hobby`, {
      headers: {
        token: token,
      },
    });

    return response.data?.result?.hobby || null;
  } catch (err: any) {
    throw err;
  }
};
