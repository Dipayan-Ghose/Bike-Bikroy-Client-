import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Routes/Route/Route';
import { Toaster } from 'react-hot-toast';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    }, []);
    
  return (
    <div className="max-w-[1540px] mx-auto">
      <RouterProvider router={route}>
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
