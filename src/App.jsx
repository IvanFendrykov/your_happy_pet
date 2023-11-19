import { Routes, Route } from 'react-router-dom';
// import SharedLayout from './components/SharedLayout/SharedLayout';
// import AddPetPage from './pages/AddPetPage/AddPetPage';
// import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
// import NewsPage from './pages/NewsPage/NewsPage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import NoticesPage from './pages/NoticesPage/NoticesPage';
// import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage';
// import RegisterPage from './pages/RegisterPage/RegisterPage';
// import UserPage from './pages/UserPage/UserPage';

function App() {
  return (
   <Routes>
       {/*<Route path="/" element={<SharedLayout />}>*/}
         <Route index element={<MainPage />} />
         {/*<Route path="notices" element={<NoticesPage />} />*/}
         {/*<Route path="friends" element={<OurFriendsPage />} />*/}
         {/*<Route path="register" element={<RegisterPage />} />*/}
         {/*<Route path="login" element={<LoginPage />} />*/}
         {/*<Route path="user" element={<UserPage />} />*/}
         {/*<Route path="add-pet" element={<AddPetPage />} />*/}
         {/*<Route path="news" element={<NewsPage />} />*/}
         {/*<Route path="*" element={<NotFoundPage />} />*/}
        {/*</Route>*/}
   </Routes>
  );
}

export default App;
