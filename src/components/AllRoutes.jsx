import {Route,Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Products from "./Products";
import SingleProductPage from "./SingleProductPage";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:id" element={<SingleProductPage/>}/>
        </Routes>
    )
}