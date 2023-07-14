import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/juventudes-logowhite.svg";
import logocolor from "../assets/juventudes-logocolor.svg";
import Button from "./Button";

const navigation = [
  { name: "Inicio", page: "/" },
  { name: "Negocios", page: "/business" },
  { name: "Contactanos", page: "/contact" },
];

export default function Navbar({ color = true }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate mb-4 z-10">
      <div className="px-4 lg:px-20 md:px-10 py-5">
        <div className="flex lg:flex-1 relative">
          <a
            href="/"
            className="absolute left-1/2 lg:left-8 top-5 md:top-4 transform -translate-x-1/2 "
          >
            <span className="sr-only">Juventudes</span>
            {color ? (
              <img
                className="h-10 md:h-12 w-auto"
                src={logo}
                alt="Juventudes Logo"
              />
            ) : (
              <img
                className="h-10 md:h-12 w-auto"
                src={logocolor}
                alt="Juventudes Logo"
              />
            )}
          </a>
        </div>
        <nav
          className="flex items-center justify-between h-20"
          aria-label="Global"
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-whitePrimary"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menu</span>
              <Bars3Icon className={`h-7 w-7 ${color ? "text-white" : "text-gray-600"}`} aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-8 lg:ml-40">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.page}
                className={`text-sm font-medium leading-6 cursor-pointer text-gray-300 ${
                  color ? "text-white" : "text-gray-600"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
            <Button text={"Iniciar Sesión"} />
          </div>
        </nav>
        <Dialog as="main" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 overflow-y-auto bg-[#212425] px-4 py-6 md:py-4 lg:hidden md:px-10 z-50"
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-whitePrimary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className={`h-7 w-7 ${color ? "text-white" : "text-gray-600"}`} aria-hidden="true" />
              </button>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Trading Alerts MX</span>
                <img
                  className="h-10 md:h-12 w-auto"
                  src={logo}
                  alt="Trading Alerts MX - Logo"
                />
              </a>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.page}
                      className={`rounded-md block py-2 px-3 text-sm font-medium leading-7 text-gray-400 hover:bg-gray-400/10 ${
                        color
                          ? "text-whitePrimary bg-gray-400/10"
                          : "text-white hover:bg-gray-400/10"
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-2">
                  <a
                    href="#"
                    className="mt-4 block rounded-md py-2.5 px-3 text-sm font-medium leading-6 text-white bg-[#2CA3DC] text-center"
                  >
                    Iniciar Sesión
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
}
