import React from 'react'
import './Home.css'
import Products from './Products'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                 src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/WAVE1-GW/6_DesktopHero_Unrec_3000x1200-aa._CB419164846_.jpg" alt=""/>
            </div>
            <div className="home_row">
                <Products id="123456" title="The lean startup"
                price={29.99}
                image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_QC_Washing-machine_372x232._SY232_CB432544819_.jpg"
                rating={5}/>
                <Products id="238236"
                price={46}
                title="Upto 80% off on Watches from Redux"
                image="https://m.media-amazon.com/images/I/5114a8X6iHL.__AC_SY400_.jpg"
                rating={4} />
                 
            </div>
            <div className="home_row">
            <Products id="2344444"
            price={16.99} title="Upto 50% Off On Printers"
            rating={3}
            image="https://m.media-amazon.com/images/I/31JtBTn3uWL.__AC_SY200_.jpg"/>
            <Products id="4932964239"
            title="Min 60% Off on Women’s Clothing from Amazon Brand Symbol"
            price={4}
            rating={4}
            image="https://m.media-amazon.com/images/I/41WsHCamYpL.__AC_SY400_.jpg"/>
                <Products id="23612836128"
                image="https://m.media-amazon.com/images/I/718YQqD-7hL._AC_SY400_.jpg"
                title="Klikfit KFM Metal Exercise Cycle"
                price={34}
                rating={5}/>
                 
           
           
            </div>
            <div className="home_row">
                <Products id="232312312"
                image="https://images-na.ssl-images-amazon.com/images/I/812WXALePlL._SX679_.jpg"
                title="AOPEN Acer 24-inch (60.96 cm) Aopen Curve Gaming Monitor - 24HC1Q (Black)"
                price={45}
                rating={5}
                
                />
               
            </div>
            
        </div>
    )
}

export default Home
