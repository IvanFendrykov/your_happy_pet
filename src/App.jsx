

import { Suspense } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

import Loader from './components/Loader/Loader';

import Layout from './components/Layout/Layout';
// import NoticesCategoriesList from './components/NoticesCategoriesList/NoticesCategoriesList';
// import AddPetPage from './pages/AddPetPage/AddPetPage';
// <<<<<<< V_Y_header_3

// const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
// const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
// const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
// const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
// const OurFriendsPage = lazy(() =>
//   import('./pages/OurFriendsPage/OurFriendsPage')
// );
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<MainPage />} />
            <Route path="main" element={<MainPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="notices" element={<NoticesPage />}>
              <Route index element={<NoticesCategoriesList />} />
              <Route path="sell" element={<NoticesCategoriesList />} />
              <Route path="lost-found" element={<NoticesCategoriesList />} />
              <Route path="for-free" element={<NoticesCategoriesList />} />
              <Route path="favorite" element={<NoticesCategoriesList />} />
              <Route path="own" element={<NoticesCategoriesList />} />
            </Route>
            <Route path="friends" element={<OurFriendsPage />} />
            <Route element={<PublicRoute />}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="user" element={<UserPage />} />
              <Route path="add-pet" element={<AddPetPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};


































// import { Routes, Route } from 'react-router-dom';
// // import SharedLayout from './components/SharedLayout/SharedLayout';
// // import AddPetPage from './pages/AddPetPage/AddPetPage';
// // import LoginPage from './pages/LoginPage/LoginPage';
// // import MainPage from './pages/MainPage/MainPage';
// // import NewsPage from './pages/NewsPage/NewsPage';
// // import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// // import NoticesPage from './pages/NoticesPage/NoticesPage';
// // import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage';
// import RegisterPage from './pages/RegisterPage/RegisterPage';
// // import UserPage from './pages/UserPage/UserPage';

//  function App() {
//    return (
//     <RegisterPage/>
// //     <Routes>
// //           {/* <Route path="/" element={<SharedLayout />}>
// // //     //     <Route index element={<MainPage />} />
// // //     //     <Route path="notices" element={<NoticesPage />} />
// // //     //     <Route path="friends" element={<OurFriendsPage />} />
//           //  <Route path="register" element={<RegisterPage />} />
// // //     //     <Route path="login" element={<LoginPage />} />
// // //     //     <Route path="user" element={<UserPage />} />
// // //     //     <Route path="add-pet" element={<AddPetPage />} />
// // //     //     <Route path="news" element={<NewsPage />} />
// // //     //     <Route path="*" element={<NotFoundPage />} />
// // //     //    </Route>  */}
  
// //     </Routes>
//    );
//  }

// export default App;
