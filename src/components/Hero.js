import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Pokeball from "../media/pokeball.svg";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Educational Benefits", href: "#benefits" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Hero() {
  return (
    <div className="relative">
      <div className="relative pt-6 pb-16 sm:pb-16">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              className="relative flex items-center mt-6 justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-end w-full md:w-auto">
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-customGray hover:text-white hover:bg-customRed focus:outline-none focus:ring-0 focus:ring-inset">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-10 w-10" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden w-full md:flex md: justify-evenly">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-2 text-lg text-customGray font-bold rounded-full hover:bg-customRed hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <img className="h-8 w-auto sm:h-10" src={Pokeball} alt="" />
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-customRed focus:outline-none focus:ring-inset focus:ring-0">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-8 w-8" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="text-center px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-customGray hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <div className="mt-4 mx-auto max-w-7xl p-4 sm:mt-10 rounded">
          <div className="flex flex-col justify-evenly text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Lorem ipsum dolor sit</span>{" "}
              <span className="block text-customRed xl:inline">amet consectetur</span>
            </h1>
            <p className="py-4 max-w-md mx-auto text-base text-customGray sm:text-lg sm:py-7 md:text-xl md:max-w-3xl md:py-10">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
              sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <Link to="/Odin_memory-card/play" className="block w-full max-w-[300px] mx-auto">
              <button className="cta-button w-full">PLAY</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
