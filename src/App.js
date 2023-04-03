import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
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
import Products from './Pages/Products/Products';


import PurchaseItem from './Pages/Products/PurchaseItem';
import AboutMe from './Pages/Dashboard/AboutMe';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import AddMoreInfo from './Pages/Dashboard/AddMoreInfo';
import ManageUsers from './Pages/Dashboard/ManageUsers';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageOrders from './Pages/Dashboard/ManageOrders';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/allProducts' element={<Products></Products>}></Route>
        <Route path='/purchaseItem/:id' element={<RequireAuth><PurchaseItem></PurchaseItem></RequireAuth>}></Route>


        <Route path='/blog' element={<Blog></Blog>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path='/dashboard' element={<MyProfile></MyProfile>}>
            <Route index element={<AboutMe></AboutMe>}></Route>
            <Route
              path="update"
              element={<UpdateProfile></UpdateProfile>}
            ></Route>
          </Route>

          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='myOrders' element={<MyOrders></MyOrders>}></Route>

          <Route path="profile" element={<MyProfile></MyProfile>}>
            <Route index element={<AboutMe></AboutMe>}></Route>
            <Route
              path="update"
              element={<UpdateProfile></UpdateProfile>}
            ></Route>
            <Route
              path="moreInfo"
              element={<AddMoreInfo></AddMoreInfo>}
            ></Route>
          </Route>

          <Route
            path="manageUsers"
            element={<ManageUsers></ManageUsers>}
          ></Route>

          <Route
            path="addProduct"
            element={
              <AddProduct></AddProduct>
            }
          ></Route>
          <Route
            path="manageOrders"
            element={
              <ManageOrders></ManageOrders>
            }
          ></Route>

        </Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
