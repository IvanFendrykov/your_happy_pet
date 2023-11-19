import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import Header from '../Header/Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = () => {
    return (
    <div>
      <Header />
      <main>
        <div>
          <Outlet />
          <ToastContainer autoClose={1700} position="top-right" />
        </div>
      </main>
       </div>
  );
};
export default SharedLayout;
