import "./Footer.css";
import image from "./footer-image.png"


export default function Footer(){

    return (
        <div id="footer">
            <div>
                <h3>KNOW YOUR JEWELLERY</h3>
                <a href="#">Diamond Guide</a>
                <a href="#">Jewellery Guide</a>
                <a href="#">Gemstones Guide</a>
                <a href="#">Gold Rate</a>
                <a href="#">Digital Gold</a>
            </div>

            <div>
                <h3>GEMSTREET ADVANTAGE</h3>
                <a href="#">15-Day Returns</a>
                <a href="#">Free Shipping</a>
                <a href="#">Financing Options</a>
                <a href="#">Old Gold Exchange</a>
            </div>

            <div>
                <h3>CUSTOMER SERVICE</h3>
                <a href="#">Return Policy</a>
                <a href="#">Order Status</a>
                <a href="#">How Tos</a>
                <a href="#">Featured Stories</a>
                <a href="#">Events & Happenings</a>
            </div>

            <div>
                <h3>ABOUT US</h3>
                <a href="#">Our Story</a>
                <a href="#">Press</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
            </div>

            <div>
                <h3>FOLLOW US</h3>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Youtube</a> 
            </div>

            <div>               
                <img src={image} alt=""/>
            </div>

    </div>
    )

}