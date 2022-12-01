import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Routes/Route/Route';

function App() {
  return (
    <div className="max-w-[1540px] mx-auto">
      <RouterProvider router={route}>
      </RouterProvider>
    </div>
  );
}

export default App;
