"use client";
import Image from "next/image";
import { CheckSvg } from "../svg";

const aboutImageSrc = "/dozzze/imagenes%20hoteles/ATyco%20Madrid/630465984.jpg";
const services = [
  "Apartamentos",
  "Baño privado",
  "WiFi gratis",
  "Vistas",
  "Adaptado personas de movilidad reducida",
  "Bañera o ducha",
  "Cocina",
  "Aire acondicionado",
  "Habitaciones familiares",
  "Habitaciones sin humo",
];

export default function AboutArea() {
  const half = Math.ceil(services.length / 2);
  const columns = [services.slice(0, half), services.slice(half)];

  return (
    <div
      className="tp-about-us-area tp-about-spacing tp-section-black p-relative"
      style={{ paddingTop: "60px", paddingBottom: "30px" }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6"
            style={{ paddingTop: "5px", paddingBottom: "5px" }}
          >
            <div
              className="tp-section-title-wrapper wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <h6 className="tp-section-title-pre-yellow tp-section-title-pre mb-5">
                ATyCO Madrid
              </h6>
              <h2 className="tp-section-title-white tp-section-title mb-40">
                ¿Por qué elegirnos?
              </h2>
              <p className="tp-section-title-content mb-30">
                ATyCO Madrid está en Madrid, a 3,5 km de Estadio Santiago
                Bernabéu y a 3,5 km de Museo Thyssen-Bornemisza, y dispone de
                vistas a la ciudad.
              </p>
            </div>
            <div className="row">
              {columns.map((items, columnIdx) => (
                <div className="col-md-6 col-sm-6" key={columnIdx}>
                  <div
                    className="tp-about-list wow fadeInUp"
                    data-wow-delay={columnIdx === 0 ? ".4s" : ".5s"}
                    data-wow-duration="1s"
                  >
                    <ul>
                      {items.map((label) => (
                        <li key={label}>
                          <span>
                            <CheckSvg />
                          </span>
                          <p>{label}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 md-relative">
            <Image
              className="tp-about-right-img"
              src={aboutImageSrc}
              alt="ATyCO Madrid"
              width={960}
              height={640}
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
