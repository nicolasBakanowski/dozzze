import { Metadata } from "next";
import AboutArea from "@/components/about/about-area";
import AboutWhoWeAre from "@/components/about/about-who-we-are";
import BlogArea from "@/components/blog/blog-area";
import HotelsGalleryArea from "@/components/gallery/hotels-gallery-area";
import HeroBanner from "@/components/hero-banner/hero-banner";
import HotelOfferRoom from "@/components/hotel/hotel-offer-room";
import HotelRooms from "@/components/hotel/hotel-rooms";
import InstagramArea from "@/components/instagram/instagram-area";
import HotelPackagesArea from "@/components/packages/hotel-packages-area";
import TestimonialArea from "@/components/testimonial/testimonial-area";


export const metadata: Metadata = {
  title: "Modern Hotel - Housey Resort and Hotel Next JS Template",
};

export default function HomeModernHotelPage() {
    return (
      <main>
        
        {/* hero banner area */}
        <section id="inicio">
          <HeroBanner/>
        </section>
        {/* hero banner area */}

        {/* who we are */}
        <section id="quienes-somos">
          <AboutWhoWeAre />
        </section>
        {/* who we are */}

        {/* about area start */}
        <section id="por-que-elegirnos">
          <AboutArea/>
        </section>
        {/* about area end */}

        {/* hotel room */}
        <section id="habitaciones">
          <HotelRooms/>
        </section>
        {/* hotel room */}

        {/* hotel offer room */}
        <section id="ofertas">
          <HotelOfferRoom/>
        </section>
        {/* hotel offer room */}

        {/* hotel gallery */}
        <section id="galeria">
          <HotelsGalleryArea/>
        </section>
        {/* hotel gallery */}

        {/* hotel packages */}
        <HotelPackagesArea/>
        {/* hotel packages */}

        {/* testimonial area */}
        <section id="testimonios">
          <TestimonialArea/>
        </section>
        {/* testimonial area */}

        {/* blog area */}
        <section id="blog">
          <BlogArea/>
        </section>
        {/* blog area */}

        {/* instagram area */}
        <section id="comunidad">
          <InstagramArea/>
        </section>
        {/* instagram area */}
        
      </main>
    );
  }
  
