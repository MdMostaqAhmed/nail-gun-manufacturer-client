import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import AllProducts from './Pages/Products/AllProducts';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/allProducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
    </div>
  );
}

export default App;
