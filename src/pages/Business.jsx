import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardB from "../components/CardB";

import transporte from "../assets/negocios/transporte.svg";
import hospedaje from "../assets/negocios/hospedaje.svg";
import educacion from "../assets/negocios/educacion.svg";
import entretenimiento from "../assets/negocios/entretenimiento.svg";

import papeleria from "../assets/negocios/papeleria.svg";
import servicios from "../assets/negocios/servicios.svg";
import belleza from "../assets/negocios/belleza.svg";
import tecnologia from "../assets/negocios/tecnologia.svg";

import alimentos from "../assets/negocios/alimentos.svg";
import marketing from "../assets/negocios/marketing.svg";
import hogar from "../assets/negocios/hogar.svg";
import deportes from "../assets/negocios/deportes.svg";

import salud from "../assets/negocios/salud.svg";
import mascotas from "../assets/negocios/mascotas.svg";


const information = [
  {
    img: transporte,
    title: "Transporte",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "D73A9B",
  },
  {
    img: hospedaje,
    title: "Hospedaje",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "2CA3DC",
  },
  {
    img: educacion,
    title: "Educacion",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "EEADD5",
  },
  {
    img: entretenimiento,
    title: "Entretenimiento",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "FFE70D",
  },
  {
    img: papeleria,
    title: "Papeleria",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "FCBB16",
  },
  {
    img: servicios,
    title: "Servicios",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "F94F30",
  },
  {
    img: belleza,
    title: "Belleza",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "A80F46",
  },
  {
    img: tecnologia,
    title: "Tecnologia",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "000000",
  },
  {
    img: alimentos,
    title: "Alimentos",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "70FA86",
  },
  {
    img: marketing,
    title: "Marketing",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "00C18F",
  },
  {
    img: hogar,
    title: "Hogar",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "2924FA",
  },
  {
    img: deportes,
    title: "Deportes",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "028316",
  },
  {
    img: salud,
    title: "Salud",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "FE4444",
  },
  {
    img: mascotas,
    title: "Mascotas",
    text: "Taxis, transporte público, alquiler de transporte, etc.",
    color: "930303",
  },
];

const Business = () => {
  return (
    <>
      <div className="bg-white">
        <Navbar color={false}></Navbar>
        <section>
          <div className="flex items-center flex-col">
            <h4 className=" text-4xl font-bold text-center pb-4">
              NEGOCIOS PARTICIPANTES
            </h4>
            <p className=" text-[#555555] text-center pb-11 max-w-[600px] px-4">
              Recuerda que debes contar con la tarjeta digital para poder hacer
              valida las promociones en nuestros establecimientos afiliados.{" "}
            </p>
          </div>
          <div className="pb-36 px-24 flex gap-y-8 gap-x-4 items-center justify-center flex-wrap">
            {information.map((info) => (
              <CardB
                img={info.img}
                title={info.title}
                text={info.text}
                color={info.color}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Business;
