import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import background from "../assets/juventudes-background.svg";

const Contact = () => {
  return (
    <>
      <div className="bg-white pb-10 relative">
      <img
          src={background}
          alt="Juventudes Background"
          className="hidden lg:block right-0 md:h-full absolute z-0"
        />
        <Navbar color={false}></Navbar>
        <div className="px-6 md:px-12 xl:px-36">
          <h4 className=" text-5xl font-bold">Contactanos</h4>
          <div className="bg-[#2CA3DC] w-24 h-2 rounded-md mt-3 mb-10"></div>
          <form>
            <label htmlFor="name" className="block font-medium mb-2">
              Nombre:
            </label>
            <input
              type="text"
              name="nombre"
              id="name"
              placeholder="Nombre"
              className=" py-2.5 px-2 border-[#6A6A6A] border rounded-md w-[400px]"
            />
            <label htmlFor="email" className="block font-medium mb-2 mt-5">
              Correo electronico:
            </label>
            <input
              type="email"
              name="correo"
              id="email"
              placeholder="Correo electronico"
              className=" py-2.5 px-2 border-[#6A6A6A] border rounded-md w-[400px]"
            />
            <label htmlFor="cel" className="block font-medium mb-2 mt-5">
              Télefono:
            </label>
            <input
              type="tel"
              name="cel"
              id="cel"
              placeholder="Telefono"
              className=" py-2.5 px-2 border-[#6A6A6A] border rounded-md w-[400px]"
            />
            <label htmlFor="text" className="block font-medium mb-2 mt-5">
              Mensaje:
            </label>
            <textarea
              name="text"
              id="text"
              placeholder="Telefono"
              className=" py-2.5 px-2 border-[#6A6A6A] border rounded-md w-[400px] h-52"
            />

            <button
              type="submit"
              className="text-white py-2.5 px-16 font-medium rounded bg-[#BD2683] block my-4"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
