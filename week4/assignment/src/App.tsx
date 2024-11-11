import { Global, ThemeProvider } from '@emotion/react'
import globalStyle from './styles/globalStyle.ts'
import { Theme } from './styles/theme.ts'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from './pages/layout/Layout.tsx'
import Login from './pages/login/Login.tsx'
import SignUp from './pages/signup/SignUp.tsx'
import MyPage from './pages/mypage/MyPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // 기본 경로를 설정
        element: <Navigate to="/login" replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
    ],
  },
]);

function App() {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global styles={globalStyle} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
