import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import AllProducts from './Pages/Products/AllProducts';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Authentication/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/allProducts' element={<RequireAuth><AllProducts></AllProducts></RequireAuth>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
