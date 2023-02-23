import { Link } from "react-router-dom"
import logo from "./gem-street-logo.png"
import "./Navbar.css"

export default function Navbar(){
    return (
        <div>
        <nav id="first">
            <Link to="/"><img src={logo} alt="Logo"/></Link>
            <input type="text" placeholder="Search your favourite products"/>
            <p>Select your PIN Code | <Link to="/cart">Cart</Link> | <Link to="/login">Login</Link></p>
        </nav>
            <nav id="second">
            <ul>
                <li><Link to="/products">New Arrivals</Link></li>
                <li><Link to="/products">Rings</Link></li>
                <li><Link to="/products">Earrings</Link></li>
                <li><Link to="/products">Bracelets&Bangles</Link></li>
                <li><Link to="/products">Solitaires</Link></li>
                <li><Link to="/products">Other Jewellery</Link></li>
            </ul>
        </nav>
        </div>
    )
}