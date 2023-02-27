import {Route,Routes} from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Login from "./Login";
import Products from "./Products";
import Signup from "./Signup";
import SingleProductPage from "./SingleProductPage";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:id" element={<SingleProductPage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    )
}