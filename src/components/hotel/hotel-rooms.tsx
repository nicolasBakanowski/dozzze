import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "../svg";

const highlightCards = [
  {
    title: "Visión + Tecnología",
    text: "Convertimos ideas complejas en sistemas sencillos y escalables que cuidan cada plaza turística.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M8 26l9.5-9.5L21 20l7.5-7.5"
          stroke="#0E0E16"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M24 12h4v4" stroke="#0E0E16" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Diseño con propósito",
    text: "Espacios que generan emociones, optimizan flujos y elevan la rentabilidad del activo.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M13 28.5v-5.086a2 2 0 01.586-1.414l12-12a2 2 0 012.828 0v0a2 2 0 010 2.828l-12 12a2 2 0 01-1.414.586H13z"
          stroke="#0E0E16"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M22 16l2 2" stroke="#0E0E16" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Obsesión por la excelencia",
    text: "Lo operativo, lo humano y lo digital trabajan como un engranaje afinado cada día.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M20 24.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
          stroke="#0E0E16"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 12v-2m0 20v-2m8-8h2m-20 0h2m14.364-5.364L31 11m-22 18 4.636-4.636m0-8.728L9 11m22 18-4.636-4.636"
          stroke="#0E0E16"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const showcaseProperties = [
  {
    id: "atyco",
    title: "ATyCO Madrid",
    rating: {
      text: "Fantástico",
      score: "9,1",
      reviews: "724 comentarios",
    },
    guests: "4 huéspedes",
    size: "75 m²",
    description: "Calle de Francisco Navacerrada, 13, Salamanca, 28028 Madrid, España.",
    image: "/dozzze/imagenes hoteles/ATyco Madrid/630465984.jpg",
    cta: {
      label: "Reservar",
      href: "https://www.booking.com/hotel/es/atyco-rent.es.html?aid=2141213&label=k-htles_d-d_u-MTc2NDk0NjEzNzg2NTYxNDA2Ng%3D%3D_g-MTU5MTMyMDY5Mi4xNzY0OTQ2MDg5_t-gp_p-placeholder1&sid=10cb2c84b91db671fd51880201373c26&age=0&all_sr_blocks=1320078204_405817610_2_0_0&checkin=2026-01-26&checkout=2026-01-27&dist=0&group_adults=2&group_children=0&hapos=2&highlighted_blocks=1320078204_405817610_2_0_0&hpos=2&matching_block_id=1320078204_405817610_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=upsort_bh&sr_pri_blocks=1320078204_405817610_2_0_0__16400&srepoch=1764946209&srpvid=831e682d1eb10459&type=total&ucfs=1#hotelTmpl",
    },
  },
  {
    id: "romeo",
    title: "DozZze Romeo",
    rating: {
      text: "Fantástico",
      score: "9,3",
      reviews: "310 comentarios",
    },
    guests: "2 huéspedes",
    size: "60 m²",
    description: "Calle de Claudio Coello, 16 Bajo, 03010 Alicante, España.",
    image: "/dozzze/imagenes hoteles/dozZze Romeo/716341974.jpg",
    cta: {
      label: "Reservar",
      href: "https://www.booking.com/hotel/es/dozzze-romeo.es.html",
    },
  },
  {
    id: "rio",
    title: "DozZze Madrid Río",
    rating: {
      text: "Fabuloso",
      score: "8,9",
      reviews: "724 comentarios",
    },
    guests: "4 huéspedes",
    size: "70 m²",
    description: "Calle Caramuel # 40 bis, Latina, 28011 Madrid, España.",
    image: "/dozzze/imagenes hoteles/dozZze-madrid Rio/696278866.jpg",
    cta: {
      label: "Reservar",
      href: "https://www.booking.com/hotel/es/dozzze-madrid-rio-madrid.es.html",
    },
  },
  {
    id: "maroto",
    title: "Dozzze Maroto Madrid",
    rating: {
      text: "Excepcional",
      score: "9,5",
      reviews: "612 comentarios",
    },
    guests: "4 huéspedes",
    size: "98 m²",
    description: "Calle de la Escalinata, 1 Bajo, Centro, 28013 Madrid, España.",
    image: "/dozzze/imagenes hoteles/dozZze - maroto madrid/701123459.jpg",
    cta: {
      label: "Reservar",
      href: "https://www.booking.com/hotel/es/dozzze-maroto-ii.es.html",
    },
  },
];

export default function HotelRooms() {
  return (
    <div className="tp-suites-area pt-115 pb-115">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-section-title-wrapper mb-60 text-center">
              <div
                className="tp-room-highlight-shell"
                style={{
                  background: "#f7f8fd",
                  borderRadius: "32px",
                  padding: "45px 50px",
                  border: "1px solid #edf0f7",
                }}
              >
                <div
                  className="tp-room-highlight-grid"
                  style={{
                    display: "flex",
                    gap: "24px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    textAlign: "center",
                  }}
                >
                  {highlightCards.map((card) => (
                    <article
                      key={card.title}
                      className="tp-room-highlight-card"
                      style={{
                        background: "#fff",
                        border: "1px solid #e4e7ef",
                        borderRadius: "32px",
                        padding: "36px 28px",
                        boxShadow: "0 20px 45px rgba(15, 15, 25, 0.08)",
                        flex: "1 1 280px",
                        minWidth: "260px",
                      }}
                    >
                      <div
                        className="tp-room-highlight-icon"
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "24px",
                          background: "#f3f4f9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 22px",
                        }}
                      >
                        {card.icon}
                      </div>
                      <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>{card.title}</h3>
                      <p style={{ margin: 0, color: "#4f5362", lineHeight: 1.7 }}>{card.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-4">
          {showcaseProperties.map((property) => (
            <div className="col-lg-3 col-md-6" key={property.id}>
              <div className="tp-suites-item p-relative">
                <div className="tp-suites-thumb">
                  <Image
                    className="w-100"
                    src={property.image}
                    alt={property.title}
                    width={380}
                    height={416}
                  />
                </div>
                <div className="tp-suites-price p-absolute d-flex align-items-center gap-2">
                  <div style={{ color: "#fff" }}>
                    <strong>{property.rating.text}</strong>
                  </div>
                  <span
                    style={{
                      background: "#003580",
                      color: "#fff",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      fontWeight: 700,
                    }}
                  >
                    {property.rating.score}
                  </span>
                </div>
                <div className="tp-suites-content p-absolute">
                  <h3 className="tp-suites-title">{property.title}</h3>
                  <div className="tp-suites-hidden">
                    <p>{property.description}</p>
                    <div className="tp-suites-btn">
                      <Link
                        className="tp-btn-2"
                        href={property.cta.href}
                        target={property.cta.href.startsWith("http") ? "_blank" : undefined}
                        rel={property.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <span>
                          <Bookmark />
                        </span>
                        {property.cta.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
