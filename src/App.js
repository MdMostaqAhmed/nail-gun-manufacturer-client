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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyProfile from './Pages/Dashboard/MyProfile';

import MyReview from './Pages/Dashboard/MyReview';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders';


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
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>
        </Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
