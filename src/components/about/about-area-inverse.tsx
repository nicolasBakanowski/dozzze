"use client";
import Image from "next/image";
import {
  Parking,
  Bathroom,
  Beds,
  Breakfast,
  SmartKey,
  Facing,
} from "../svg";

const aboutImageSrc = "/dozzze/imagenes%20hoteles/dozZze%20Romeo/716341974.jpg";
const services = [
  { label: "Apartamentos", Icon: Beds },
  { label: "Parking gratis", Icon: Parking },
  { label: "Baño privado", Icon: Bathroom },
  { label: "Admite mascotas", Icon: Facing },
  { label: "WiFi gratis", Icon: Breakfast },
  { label: "Adaptado personas de movilidad reducida", Icon: SmartKey },
  { label: "Ducha", Icon: Bathroom },
  { label: "Habitaciones familiares", Icon: Facing },
  { label: "Aire acondicionado", Icon: SmartKey },
  { label: "Cocina", Icon: SmartKey },
];

export default function AboutAreaInverse() {
  return (
    <div
      className="tp-about-us-area tp-about-spacing p-relative"
      style={{
        backgroundColor: "#fff",
        color: "#1B1B1B",
        marginTop: "40px",
        paddingTop: "60px",
        paddingBottom: "40px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 md-relative mb-40 mb-lg-0" style={{ minHeight: 400 }}>
            <Image
              className="tp-about-right-img"
              src={aboutImageSrc}
              alt="DozZze Romeo"
              width={960}
              height={640}
              style={{ height: "auto", left: 0, right: "auto" }}
            />
          </div>
          <div
            className="col-lg-6"
            style={{ paddingTop: "5px", paddingBottom: "5px" }}
          >
            <div
              className="tp-section-title-wrapper wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <h6 className="tp-section-title-pre mb-5" style={{ color: "#A05916" }}>
                DozZze Romeo
              </h6>
              <h2 className="tp-section-title mb-40" style={{ color: "#141414" }}>
                ¿Por qué elegirnos?
              </h2>
              <p className="tp-section-title-content mb-30" style={{ color: "#4A4A4A" }}>
                DozZze Romeo ofrece lofts sensoriales para desconectar en pleno Madrid.
              </p>
            </div>
            <div className="row g-3">
              {services.map(({ label, Icon }) => (
                <div className="col-md-6" key={label}>
                  <div
                    className="d-flex align-items-center gap-3 border rounded-3 px-3 py-2"
                    style={{ borderColor: "#e4e4e4" }}
                  >
                    <span style={{ color: "#141414" }}>
                      <Icon />
                    </span>
                    <p className="mb-0" style={{ color: "#141414", fontWeight: 500 }}>
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
