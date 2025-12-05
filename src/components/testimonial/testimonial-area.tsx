'use client';
import { useMemo, useState } from "react";

type Review = {
  id: string;
  name: string;
  country: string;
  stay: string;
  travelerType: string;
  date: string;
  title: string;
  positive: string;
  negative?: string;
  score: string;
};

const propertyReviews = [
  {
    id: "atyco",
    label: "ATyCO Madrid",
    reviews: [
      {
        id: "atyco-1",
        name: "Garazi",
        country: "España",
        stay: "Apartamento de 2 dormitorios · 1 noche · noviembre 2025",
        travelerType: "En grupo",
        date: "3 de diciembre de 2025",
        title: "Fantástico",
        positive: "Todo limpio y nuevo.",
        negative: undefined,
        score: "9,0",
      },
      {
        id: "atyco-2",
        name: "Marcos",
        country: "España",
        stay: "Apartamento de 1 dormitorio · 1 noche · noviembre 2025",
        travelerType: "En pareja",
        date: "3 de diciembre de 2025",
        title: "Genial",
        positive: "Calidad, precio inmejorable!! El apartamento estaba impoluto.",
        negative: "Nada",
        score: "10",
      },
      {
        id: "atyco-3",
        name: "Raquel",
        country: "Perú",
        stay: "Estudio Familiar · 2 noches · noviembre 2025",
        travelerType: "En pareja",
        date: "2 de diciembre de 2025",
        title: "Estuvo muy bien!",
        positive: "Sí",
        negative: "Un poco de ruido zona lavandería",
        score: "9,0",
      },
    ] satisfies Review[],
  },
  {
    id: "romeo",
    label: "DozZze Romeo",
    reviews: [
      {
        id: "romeo-1",
        name: "María",
        country: "España",
        stay: "Estudio Familiar · 1 noche · noviembre 2025",
        travelerType: "Persona que viaja sola",
        date: "3 de diciembre de 2025",
        title: "Cómodo",
        positive:
          "Un 10. Limpieza, instalaciones, comunicación con los responsables. Recomendable 100 %. Es la segunda vez que me alojo en uno de los apartamentos y sin duda repetiré.",
        negative: "No tengo nada negativo que decir.",
        score: "10",
      },
      {
        id: "romeo-2",
        name: "Olga",
        country: "España",
        stay: "Estudio · 1 noche · noviembre 2025",
        travelerType: "En pareja",
        date: "2 de diciembre de 2025",
        title: "Excepcional",
        positive: "Un piso pequeño, pero muy limpio y bien ajustado.",
        negative: undefined,
        score: "10",
      },
      {
        id: "romeo-3",
        name: "David",
        country: "España",
        stay: "Dúplex · 3 noches · noviembre 2025",
        travelerType: "Persona que viaja sola",
        date: "1 de diciembre de 2025",
        title: "Bonito, cómodo y acogedor.",
        positive:
          "Muy cómodo y bonito, relación calidad-precio buena. No está nada céntrico pero hay mucho aparcamiento. Cerca de tranvía. El personal muy atento. Repetiría sin duda.",
        negative:
          "El calefactor del agua hacía mucho ruido y se oía de noche, pero con cerrar la puerta del baño basta.",
        score: "9,0",
      },
    ] satisfies Review[],
  },
  {
    id: "rio",
    label: "DozZze Madrid Río",
    reviews: [
      {
        id: "rio-1",
        name: "Bea",
        country: "España",
        stay: "Estudio · 3 noches · diciembre 2025",
        travelerType: "En familia",
        date: "2 de diciembre de 2025",
        title: "Muy limpio y buena ubicación",
        positive:
          "Reservamos dos apartamentos y los dos estaban súper limpios y nuevos. Acceso con clave, todo súper sencillo. Cerca del centro caminando y con la parada de metro a 2 minutos. Un supermercado a la vuelta de la esquina. No se oyen nada los ruidos. Muy amables la atención al cliente. Volveremos seguro!",
        negative: undefined,
        score: "10",
      },
      {
        id: "rio-2",
        name: "Bea",
        country: "España",
        stay: "Estudio Familiar · 2 noches · noviembre 2025",
        travelerType: "En familia",
        date: "2 de diciembre de 2025",
        title: "Limpísimo, atentos y buena ubicación",
        positive:
          "El alojamiento estaba impoluto, limpisimo, nuevo. Con todas las comodidades que hacen falta. Te dejan una botella de agua que se agradece mucho y unas cápsulas para hacerte café por las mañanas. Nos dejaron hacer el check-in antes en cuanto tuvieron la habitación disponible. Incluso quedarnos una hora más al marchar. Atención por WhatsApp 24 horas y muy, muy amables. En 20 min caminando estás en el Palacio Real y es un paseo muy ameno por calles amplias y principales. Y en 5 minutos tienes la parada del metro. Al salir y girar la calle tienes un DIA. De verdad, de 10. Volveremos seguro.",
        negative: "Nada, todo estaba perfecto. No tengo ni un pero!",
        score: "10",
      },
    ] satisfies Review[],
  },
  {
    id: "maroto",
    label: "DozZze Maroto Madrid",
    reviews: [
      {
        id: "maroto-1",
        name: "Yeralidine",
        country: "España",
        stay: "Apartamento Deluxe de 2 dormitorios · 1 noche · agosto 2025",
        travelerType: "En familia",
        date: "17 de agosto de 2025",
        title: "Excelente.",
        positive:
          "Me gustó todo. Comodidad, zona, limpieza, espacio. Todo perfecto muy acogedor. Señor de mantenimiento muy amable. Tal cual está en la foto es el hospedaje. De 10.",
        negative: undefined,
        score: "10",
      },
      {
        id: "maroto-2",
        name: "Carmen",
        country: "España",
        stay: "Apartamento Deluxe de 2 dormitorios · 3 noches · junio 2025",
        travelerType: "En familia",
        date: "1 de julio de 2025",
        title: "Excepcional",
        positive:
          "Lugar donde mayores y pequeños se sienten muy cómodos.",
        negative: "Nos alegra mucho saber que tanto mayores como pequeños se…",
        score: "10",
      },
      {
        id: "maroto-3",
        name: "Gemma",
        country: "España",
        stay: "Apartamento Deluxe de 2 dormitorios · 2 noches · junio 2025",
        travelerType: "En familia",
        date: "21 de junio de 2025",
        title: "La mejor decisión del viaje!!!",
        positive:
          "La casa es genial!!!!! Muy muy bien equipada. No falta de nada. La situación es inmejorable. El personal muy amable y atentos en todo momento. Volvería sin dudarlo!!",
        negative: undefined,
        score: "10",
      },
    ] satisfies Review[],
  },
];

export default function TestimonialArea() {
  const [activeTab, setActiveTab] = useState(propertyReviews[0].id);
  const activeProperty = useMemo(
    () => propertyReviews.find((property) => property.id === activeTab),
    [activeTab]
  );

  return (
    <div className="tp-testimonial-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-bg-gray pt-95 pb-105">
              <div className="row justify-content-center mb-40">
                <div className="col-xl-8 col-lg-10">
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    {propertyReviews.map((property) => (
                      <button
                        key={property.id}
                        onClick={() => setActiveTab(property.id)}
                        className="tp-btn-square"
                        style={{
                          minWidth: "180px",
                          textTransform: "none",
                          backgroundColor:
                            property.id === activeTab ? "#003580" : "transparent",
                          color: property.id === activeTab ? "#fff" : "#003580",
                          border: "1px solid #003580",
                        }}
                        type="button"
                      >
                        {property.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-11">
                  {activeProperty?.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="tp-testimonial-wrapper text-start mb-30"
                      style={{
                        border: "1px solid #e5e5e5",
                        borderRadius: "10px",
                        padding: "30px",
                        backgroundColor: "#fff",
                      }}
                    >
                      <div className="d-flex flex-wrap justify-content-between gap-3 mb-20">
                        <div>
                          <h5 className="mb-0">{review.name}</h5>
                          <p className="mb-1 text-muted">{review.country}</p>
                          <p className="mb-1 text-muted">{review.stay}</p>
                          <p className="mb-0 text-muted">{review.travelerType}</p>
                        </div>
                        <div className="text-center">
                          <span className="d-inline-block px-3 py-2 rounded-3 text-white fw-bold" style={{ backgroundColor: "#003580" }}>
                            {review.score}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted mb-2">
                        Fecha del comentario: {review.date}
                      </p>
                      <h4 className="mb-15">{review.title}</h4>
                      <p className="mb-2">{review.positive}</p>
                      {review.negative && (
                        <p className="mb-0">{review.negative}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
