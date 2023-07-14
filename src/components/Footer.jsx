import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center py-7 px-6 md:px-12 xl:px-36">
      <h6 className="italic text-white flex-1">
        © 2023 Tarjeta Juventudes - Instituto de la Juventud del Estado de
        Chiapas.
      </h6>
      <ul className="text-white flex gap-4">
        <li className="w-6 h-6 border flex items-center justify-center p-6 rounded-full">
          <a href="" target="_blank">
            <i class="fa-brands fa-twitter text-lg"></i>
          </a>
        </li>
        <li className="w-6 h-6 border flex items-center justify-center p-6 rounded-full">
          <a href="" target="_blank">
            <i class="fa-brands fa-facebook-f text-lg"></i>
          </a>
        </li>
        <li className="w-6 h-6 border flex items-center justify-center p-6 rounded-full">
          <a href="" target="_blank">
            <i class="fa-brands fa-instagram text-lg"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
