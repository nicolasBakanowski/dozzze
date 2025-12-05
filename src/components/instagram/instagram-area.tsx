'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";


const swiper_options: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    breakpoints: {
        '1200': {
            slidesPerView: 6,
        },
        '991': {
            slidesPerView: 5,
        },
        '768': {
            slidesPerView: 4,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },
    navigation: {
        nextEl: ".tp-destinations-next",
        prevEl: ".tp-destinations-prev",
    }
}

const instagramData = [
    { id: 1, imgSrc: "/dozzze/imagenes hoteles/ATyco Madrid/630526627.jpg", link: 'https://www.instagram.com/' },
    { id: 2, imgSrc: "/dozzze/imagenes hoteles/dozZze Romeo/715731871.jpg", link: 'https://www.instagram.com/' },
    { id: 3, imgSrc: "/dozzze/imagenes hoteles/dozZze - maroto madrid/701123464.jpg", link: 'https://www.instagram.com/' },
    { id: 4, imgSrc: "/dozzze/imagenes hoteles/dozZze-madrid Rio/696279522.jpg", link: 'https://www.instagram.com/' },
    { id: 5, imgSrc: "/dozzze/imagenes hoteles/dozZze Romeo/716362443.jpg", link: 'https://www.instagram.com/' },
    { id: 6, imgSrc: "/dozzze/imagenes hoteles/dozZze - maroto madrid/701123467.jpg", link: 'https://www.instagram.com/' },
].map((item) => ({ ...item, imgSrc: encodeURI(item.imgSrc) }));

export default function InstagramArea() {
    return (
        <div className="tp-instagram-area pb-10">
            <div className="container-fluid fix">
                <div className="row">
                    <Swiper {...swiper_options} className="swiper-container tp-instagram-slide">

                        {instagramData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="tp-instagram-thumb p-relative">
                                    <a className="popup-image" href={item.link} target="_blank">
                                        <Image
                                            className="w-100"
                                            src={item.imgSrc}
                                            alt="instagram"
                                            width={308}
                                            height={260}
                                            style={{ width: "100%", height: "260px", objectFit: "cover" }}
                                        />
                                        <div className="tp-instagram-icon p-absolute">
                                            <span><i className="fa-brands fa-instagram"></i></span>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    )
}
