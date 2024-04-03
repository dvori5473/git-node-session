import './App.css';
import NavBar from './components/NavBar';
import "primereact/resources/themes/arya-blue/theme.css"
import "primereact/resources/primereact.min.css"
import { Route, Routes } from 'react-router-dom';
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import Products from './features/products/Products';
import Register from './features/auth/Register'; 
import Login from './features/auth/Login';
import Product from './features/products/Product';
import Home from './components/Home';
import FullBasket from './features/basket/FullBasket';
import Update from './features/user/Update';
import Checkout from './features/basket/Checkout';
import AdminProducts from './features/products/AdminProducts';
import AdminUsers from './features/user/AdminUsers';
import Orders from './features/order/Orders';
import RequireAuth from './features/auth/RequireAuth';
import { useState } from 'react';


function App() {
  const [visibleRight, setVisibleRight] = useState(false);
  return (
    <>
   <NavBar setVisibleRight={setVisibleRight} visibleRight={visibleRight}/> 
   <Routes>
   <Route path='/'element={<Home/>}></Route>
   <Route path='/login'element={<Login/>}></Route> 
   <Route path='/product'element={<Products/>}></Route>
    <Route path='/register'element={<Register/>}></Route>
    <Route path='/basket'element={<FullBasket/>}></Route> 
   <Route path='/product/:id'element={<Product/>}></Route>
   <Route element={<RequireAuth allowRoles={["admin","user"]}/>}>

   <Route path='/update'element={<Update/>}></Route>

   <Route path='/checkout'element={<Checkout/>}></Route>
    
    <Route path='/orders/:id'element={<Orders/>}></Route>
    </Route>
   <Route element={<RequireAuth allowRoles={["admin"]}/>}>

   <Route path='/adminProducts'element={<AdminProducts/>}></Route>
  
   <Route path='/adminUsers'element={<AdminUsers/>}></Route>
    </Route>
 
   
   </Routes>
    </>

  );
}

export default App;

