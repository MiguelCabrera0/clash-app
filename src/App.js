import AuthContainer from './authetication/AuthContainer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUpContainer from './authetication/SignUp/SignUpContainer';
import MainContainer from './main/MainContainer';
import AuthProvider from './authetication/AuthProvider';
import PrivateRoute from './authetication/PrivateRoute';
import Navigation from './navigation/Navigation';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthProvider />,
      children: [
        {
          path: '/signin',
          element: <AuthContainer />
        },
        {
          path: '/signup',
          element: <SignUpContainer />
        },
        {
          path: '/',
          element: <PrivateRoute><Navigation /></PrivateRoute>,
          children: [
            {
              path: '/main',
              element: <MainContainer />,
            }
          ]
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
