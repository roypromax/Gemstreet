import Footer from "./Footer";
import "./Home.css";



export default function Home(){
    return(
        <>
        <div class="banner">
             <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Newin/01/Desktop_1920-x560_toplisting.jpg" alt=""/>
        </div>



        <div id="deals_grid">
            <div><img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Store/02/2x.gif" alt=""/></div>
            <div><img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Personal/01/2X.jpg" alt=""/></div>
            <div><img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/RunWay/1X.jpg" alt=""/></div>
            <div><img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/RTS/02/2x1.gif" alt=""/></div>
            <div><img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Best/2x.jpg" alt=""/></div>          
            <div><img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Newin/03/1X.jpg" alt=""/></div>
        </div>


        <div class="banner">
             <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Offer/02/Desktop_1920x560_toplisting.jpg" alt=""/>
        </div>

        <div id="deals_grid2">
            <div><img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/01-JAN/HP-Banner/Collection/Collection_Harry_potter_1.jpg" alt="" /></div>
            <div><img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/Collection/Collection_Blaze.jpg" alt="" /></div>
            <div><img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/HP-Banner/Collection/Collection_Mogra.jpg" alt="" /></div>
        </div>

        <Footer/>
    
    </>

    )
}