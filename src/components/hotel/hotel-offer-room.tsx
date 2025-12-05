"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "../svg";

const showcaseProperties = [
  {
    id: "atyco",
    badge: "Skyline Living",
    title: "ATyCO Madrid",
    beds: "2 dormitorios",
    guests: "4 huéspedes",
    rating: "Puntuación Fantástico 9,1",
    description:
      "Áticos dúplex con terraza privada frente a Azca, acceso autónomo y vistas despejadas para trabajar o desconectar.",
    address: "Calle de Francisco Navacerrada, 13, Salamanca, 28028 Madrid",
    image: "/dozzze/imagenes hoteles/ATyco Madrid/630465984.jpg",
    ctaHref:
      "https://www.booking.com/hotel/es/atyco-rent.es.html?aid=2141213&label=k-htles_d-d_u-MTc2NDk0NjEzNzg2NTYxNDA2Ng%3D%3D_g-MTU5MTMyMDY5Mi4xNzY0OTQ2MDg5_t-gp_p-placeholder1&sid=10cb2c84b91db671fd51880201373c26&age=0&all_sr_blocks=1320078204_405817610_2_0_0&checkin=2026-01-26&checkout=2026-01-27&dist=0&group_adults=2&group_children=0&hapos=2&highlighted_blocks=1320078204_405817610_2_0_0&hpos=2&matching_block_id=1320078204_405817610_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=upsort_bh&sr_pri_blocks=1320078204_405817610_2_0_0__16400&srepoch=1764946209&srpvid=831e682d1eb10459&type=total&ucfs=1#hotelTmpl",
  },
  {
    id: "romeo",
    badge: "Adults Only",
    title: "DozZze Romeo",
    beds: "Estudios sensoriales",
    guests: "2 huéspedes",
    rating: "Puntuación Fantástico 9,3",
    description:
      "Lofts con domótica, iluminación inmersiva y mayordomo digital. Diseñados para una escapada romántica o creativa.",
    address: "Calle de Claudio Coello, 16 Bajo, 03010 Alicante",
    image: "/dozzze/imagenes hoteles/dozZze Romeo/716341974.jpg",
    ctaHref: "https://www.booking.com/hotel/es/dozzze-romeo.es.html",
  },
  {
    id: "rio",
    badge: "Madrid Río",
    title: "DozZze Madrid Río",
    beds: "Lofts junto al río",
    guests: "4 huéspedes",
    rating: "Puntuación Fabuloso 8,9",
    description:
      "Apartamentos tranquilos frente al Manzanares con check-in remoto y zonas verdes para pasear o hacer deporte.",
    address: "Calle Caramuel 40 bis, Latina, 28011 Madrid",
    image: "/dozzze/imagenes hoteles/dozZze-madrid Rio/696278866.jpg",
    ctaHref: "https://www.booking.com/hotel/es/dozzze-madrid-rio-madrid.es.html",
  },
  {
    id: "maroto",
    badge: "Colección Dozzze",
    title: "DozZze Maroto Madrid",
    beds: "Residencias boutique",
    guests: "4 huéspedes",
    rating: "Puntuación Excepcional 9,5",
    description:
      "Espacios amplios con arte local en pleno centro histórico, ideales para estancias largas y escapadas culturales.",
    address: "Calle de la Escalinata, 1 Bajo, Centro, 28013 Madrid",
    image: "/dozzze/imagenes hoteles/dozZze - maroto madrid/701123459.jpg",
    ctaHref: "https://www.booking.com/hotel/es/dozzze-maroto-ii.es.html",
  },
];

const cycleInterval = 6500;

export default function HotelOfferRoom() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    setContentVisible(false);
    const fadeTimer = setTimeout(() => setContentVisible(true), 200);
    return () => clearTimeout(fadeTimer);
  }, [activeIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseProperties.length);
    }, cycleInterval);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const activeProperty = useMemo(
    () => showcaseProperties[activeIndex],
    [activeIndex]
  );

  return (
    <div className="tp-offer-room-area tp-offer-room-space">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <div className="position-relative overflow-hidden rounded-4" style={{ minHeight: 380 }}>
              {showcaseProperties.map((property, index) => (
                <div
                  key={property.id}
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    opacity: index === activeIndex ? 1 : 0,
                    transition: "opacity 0.8s ease",
                  }}
                >
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(min-width: 992px) 60vw, 100vw"
                    priority={index === 0}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="tp-offer-info-wrapper shadow-sm"
              style={{
                background: "#fff",
                transition: "opacity 0.4s ease",
                opacity: contentVisible ? 1 : 0,
              }}
            >
              <div className="tp-offer-title-wrap">
                <span className="tp-offer-title-pre">{activeProperty.badge}</span>
                <h2 className="tp-offer-title mb-20">{activeProperty.title}</h2>
              </div>
              <div className="mb-3 text-muted">
                <strong>{activeProperty.beds}</strong>
                <span className="space"> · </span>
                <span>{activeProperty.guests}</span>
              </div>
              <p className="mb-2 fw-medium">{activeProperty.rating}</p>
              <p className="mb-3">{activeProperty.address}</p>
              <span className="tp-offer-border mb-15"></span>
              <p className="tp-offer-para mb-35">{activeProperty.description}</p>
              <div className="tp-offer-btn mb-3">
                <Link
                  className="tp-btn-2 tp-btn-3"
                  href={activeProperty.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <Bookmark />
                  </span>
                  Reservar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
