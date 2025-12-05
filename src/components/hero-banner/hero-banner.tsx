import Link from "next/link";
import {NextArrow, PrevArrow, UpArrow } from "../svg";
import HeroBannerSlider from "./slider/banner-slider";

export default function HeroBanner() {
   return (
      <div className="tp-hero-area p-relative">
         {/* banner slider */}
         <HeroBannerSlider/>
         {/* banner slider */}
         <div className="tp-hero-arrow-box d-none d-sm-block">
            <button className="tp-hero-next">
               <NextArrow />
            </button>
            <button className="tp-hero-prev">
               <PrevArrow />
            </button>
         </div>
         <div className="tp-hero-content-area">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-10">
                     <div className="tp-hero-content text-center">
                        <div className="tp-hero-title-box mb-30">
                           <h5 className="tp-hero-subtitle mb-15 wow img-custom-anim-top" data-wow-duration="1s" data-wow-delay="0.1s">Proyecto Dozzze</h5>
                           <h2 className="tp-hero-title wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.4s">Excelencia hotelera que une diseño, tecnología y rentabilidad</h2>
                           <p className="tp-hero-desc wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.5s" style={{ color: "#fff" }}>
                              Creamos alojamientos que operan como relojes suizos: el huésped descansa mejor, los equipos rinden mejor y los inversores sueñan con nuestros resultados.
                           </p>
                        </div>
                        <div className="tp-hero-btn-box  wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.4s">
                           <Link className="tp-btn" href="/about">
                              <span className="explore-text">Conoce nuestra historia</span>
                              <span className="tp-arrow-angle">
                                 {" "}<UpArrow />
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
      </div>
   )
}
