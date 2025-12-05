import type { CSSProperties } from "react";

type IProps = {
  top_bg?: string;
  style_2?: boolean;
};

const COMPANY_NAME = "Explotaciones Hosteleras InfantAS SL";
const ADDRESS =
  "C/ Las Palmas - Número 44, 1ºB 28937 - Móstoles, Madrid";
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

const infoGeneral = [
  { label: "NIF", value: "B88590989" },
  { label: "Antigüedad", value: "5 años (10/02/2020)" },
  { label: "Domicilio", value: ADDRESS },
  { label: "Registro Mercantil", value: "Registro Mercantil de Madrid" },
  { label: "Actos publicados en el BORME", value: "Registro histórico disponible" },
  { label: "Análisis financiero", value: "Último informe 2024" },
];

const infoSituacion = [
  { label: "Sector", value: "Alojamiento y casinos" },
  { label: "Cargo directivo", value: "Galindo Segurola Elhit (Administrador único)" },
  { label: "Últimas cuentas presentadas", value: "Ejercicio 2024" },
  { label: "Información crediticia", value: "Consultar bajo solicitud" },
];

const cardStyle: CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "18px",
  padding: "28px",
  height: "100%",
};

const pillStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  backgroundColor: "rgba(255,255,255,0.08)",
  padding: "6px 14px",
  borderRadius: "999px",
  fontSize: "14px",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

export default function FooterArea({ top_bg = "tp-pink-bg", style_2 }: IProps) {
  return (
    <footer>
      <div className={`tp-footer-area ${top_bg} pt-120`}>
        <div className="container mb-50">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
              <div className={`tp-footer-widget mb-60 ${style_2 ? "tp-footer-widget-3" : ""}`}>
                <div className="tp-footer-widget-content" style={cardStyle}>
                  <span style={pillStyle}>Información corporativa</span>
                  <h3 className="text-white mt-15 mb-15" style={{ fontSize: "24px" }}>
                    {COMPANY_NAME}
                  </h3>
                  <p className="text-white mb-20">
                    {COMPANY_NAME} opera alojamientos turísticos en Madrid desde 2020,
                    manteniendo la información legal y financiera siempre disponible para nuestros huéspedes.
                  </p>
                  <div className={`tp-footer-location mb-20 ${style_2 ? "tp-footer-location-3" : ""}`}>
                    <a href={MAP_URL} target="_blank" rel="noreferrer">
                      {ADDRESS}
                    </a>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <a
                      href={MAP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="tp-btn-white"
                      style={{ backgroundColor: "#fff", color: "#3c1f2b", borderRadius: "30px", padding: "10px 22px" }}
                    >
                      Ver ubicación
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-7 col-md-6 col-sm-6">
              <div className={`tp-footer-widget mb-60 ${style_2 ? "tp-footer-widget-3" : ""}`}>
                <div className={`tp-footer-widget-content ${style_2 ? "tp-footer-widget-content-3" : ""}`} style={cardStyle}>
                  <span style={pillStyle}>Información general</span>
                  <h3 className="text-white mt-15 mb-20" style={{ fontSize: "22px" }}>
                    Datos registrales
                  </h3>
                  <div className="row g-3">
                    {infoGeneral.map((item) => (
                      <div className="col-12" key={item.label}>
                        <small className="text-white-50 d-block">{item.label}</small>
                        <strong className="text-white d-block">{item.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className={`tp-footer-widget ${style_2 ? "tp-footer-widget-3" : "tp-footer-widget-space"} mb-60`}>
                <div className={`tp-footer-widget-content ${style_2 ? "tp-footer-widget-content-3" : ""}`} style={cardStyle}>
                  <span style={pillStyle}>Situación actual</span>
                  <h3 className="text-white mt-15 mb-20" style={{ fontSize: "22px" }}>
                    Indicadores vigentes
                  </h3>
                  <div className="row g-3">
                    {infoSituacion.map((item) => (
                      <div className="col-12" key={item.label}>
                        <small className="text-white-50 d-block">{item.label}</small>
                        <strong className="text-white d-block">{item.value}</strong>
                      </div>
                    ))}
                  </div>
                  <p className={`tp-footer-widget-para ${style_2 ? "tp-footer-widget-para-3" : ""} mt-20 mb-15`}>
                    Para informes oficiales o actualizaciones adicionales, utilice los enlaces proporcionados o contáctenos
                    directamente.
                  </p>
                  <div style={pillStyle}>Actualizado {new Date().getFullYear()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-botom">
          <div className="container">
            <div className="tp-footer-bottom-inner">
              <div className="row">
                <div className="col-sm-6">
                  <div className={`tp-footer-copyright ${style_2 ? "tp-footer-copyright-3" : ""}`}>
                    <p>
                      Copyright © {new Date().getFullYear()} <a href="#">{COMPANY_NAME}</a>. Todos los derechos
                      reservados.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className={`tp-footer-develop tp-footer-copyright ${style_2 ? "tp-footer-copyright-3" : ""} text-right`}>
                    <p>Datos societarios actualizados a {new Date().getFullYear()}.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
