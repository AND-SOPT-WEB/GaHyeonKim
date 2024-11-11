import { Global, ThemeProvider } from '@emotion/react'
import globalStyle from './styles/globalStyle.ts'
import { Theme } from './styles/theme.ts'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from './pages/layout/Layout.tsx'
import Login from './pages/login/Login.tsx'
import MyPage from './pages/mypage/MyPage.tsx'
import SignUpPage from './pages/signup/SignUpPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />, // / 로 접근 시 /login으로 리다이렉트
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Navigate to="/signup/1" replace />, // /signup으로 접근 시 /signup/1로 리다이렉트
      },
      {
        path: "signup/:step",
        element: <SignUpPage />,
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
