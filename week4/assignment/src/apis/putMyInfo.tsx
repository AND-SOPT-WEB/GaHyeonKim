import axios from 'axios';

interface UpdateUserRequest {
  hobby: string;
  password: string;
}

export const putMyInfo = async (data: UpdateUserRequest) => {
    const token = localStorage.getItem('authToken');
  
    try {
    const response = await axios.put(
      `${import.meta.env.VITE_APP_BASE_URL}/user`, 
      data, 
      {
        headers: {
          token: token,
        },
      }
    );

    return response.data;
  } catch (err: any) {
    throw err;
  }
};
