import AboutArea from "@/components/about/about-area";
import AmenitiesArea from "@/components/amenities/amenities-area";
import BlogArea from "@/components/blog/blog-area";
import HotelsGalleryArea from "@/components/gallery/hotels-gallery-area";
import HeroBannerFive from "@/components/hero-banner/hero-banner-5";
import HotelOfferRoom from "@/components/hotel/hotel-offer-room";
import HotelRooms from "@/components/hotel/hotel-rooms";
import InstagramArea from "@/components/instagram/instagram-area";
import HotelPackagesArea from "@/components/packages/hotel-packages-area";
import TestimonialArea from "@/components/testimonial/testimonial-area";


export default function SeaHotelPage() {
  return (
    <>

      {/* hero banner area start */}
      <HeroBannerFive />
      {/* hero banner area end */}

      {/* amenities area start */}
      <AmenitiesArea/>
      {/* amenities area end */}

      {/* about area start */}
      <AboutArea/>
      {/* about area end */}

      {/* hotel area start */}
      <HotelRooms/>
      {/* hotel area end */}

      {/* hotel offer area start */}
      <HotelOfferRoom/>
      {/* hotel offer area end */}

      {/* gallery area start */}
      <HotelsGalleryArea/>
      {/* gallery area end */}

      {/* hotel package area */}
      <HotelPackagesArea/>
      {/* hotel package area */}

      {/* testimonial area start */}
      <TestimonialArea/>
      {/* testimonial area end */}

      {/* blog area start */}
      <BlogArea/>
      {/* blog area end */}

      {/* instagram area start */}
      <InstagramArea/>
      {/* instagram area end */}
    </>
  )
}
