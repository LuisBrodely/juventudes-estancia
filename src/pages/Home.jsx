import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Card from "../components/Card";
import background from "../assets/juventudes-background.svg";
import triangulo from "../assets/juventudes-triangulo.svg";
import personas from "../assets/personas.jpg";

const Home = () => {
  return (
    <div>
      <main className="bg-[#212425] relative">
        <img
          src={background}
          alt="Juventudes Background"
          className="hidden md:block right-0 md:h-screen absolute z-0"
        />
        <Navbar></Navbar>
        <section className="px-6 md:px-12 xl:px-36 pb-40 relative z-30">
          <h2 className="font-bold text-7xl text-white max-w-lg mt-20">
            Consigue tu tarjeta de descuentos
          </h2>
          <p className=" mt-7 max-w-md text-white font-medium">
            Conoce los descuentos a los cuales puedes acceder y comienza a
            aprovechar de estos beneficios.
          </p>
          <div className="flex items-center max-w-lg mt-8">
            <Button text="Comenzar" color={false}></Button>
            <h4 className=" ml-7 text-white font-medium">Conocer mas</h4>
          </div>
        </section>
      </main>
      <section className="bg-white py-16 z-30 relative">
        <div className="flex justify-center items-center pb-8">
          <img
            src={triangulo}
            alt="Triangulo recurso"
            className="transform rotate-180 w-32 md:w-40"
          />
          <div>
            <h4 className=" text-4xl font-bold text-center">
              TARJETA JUVENTUDES
            </h4>
            <p className="font-bold text-[#555555] text-center">
              Conoce mas sobre la tarjeta juventudes y sus beneficios
            </p>
          </div>
          <img
            src={triangulo}
            alt="Triangulo recurso"
            className="w-32 md:w-40"
          />
        </div>
        <div className="px-6 md:px-12 xl:px-36 flex flex-wrap items-center">
          <div className="flex-1">
            <div className=" mb-7">
              <h5 className="font-bold text-2xl">¿QUÉ ES?</h5>
              <div className=" w-14 h-2 bg-[#2CA3DC] my-4"></div>
              <p className="text-[#555555] font-bold max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                et magna vel quam euismod feugiat a eu justo. Fusce vel tempus
                justo.
              </p>
            </div>
            <div className=" mb-7">
              <h5 className="font-bold text-2xl">¿QUÉ BENEFICIOS OBTENGO?</h5>
              <div className=" w-14 h-2 bg-[#BD2683] my-4"></div>
              <p className="text-[#555555] font-bold max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                et magna vel quam euismod feugiat a eu justo. Fusce vel tempus
                justo.
              </p>
            </div>
            <div className=" mb-7">
              <h5 className="font-bold text-2xl">¿COMO LA USO?</h5>
              <div className=" w-14 h-2 bg-[#2CA3DC] my-4"></div>
              <p className="text-[#555555] font-bold max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                et magna vel quam euismod feugiat a eu justo. Fusce vel tempus
                justo.
              </p>
            </div>
          </div>
          <div className="">
            <img
              src={personas}
              alt="Juventudes Personas Ilustracion"
              className="w-full md:w-[402px] lg:w-[702px]"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-6 md:px-10 pb-36">
        <h4 className=" text-4xl font-bold text-center">
          NEGOCIOS PARTICIPANTES
        </h4>
        <p className="font-bold text-[#555555] text-center pb-11">
          Estos son algunos negocios donde puedes aplicarla
        </p>
        <div className="flex gap-5 flex-wrap justify-center">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
