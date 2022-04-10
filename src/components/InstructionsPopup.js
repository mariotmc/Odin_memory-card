import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowRightIcon, XIcon, CheckIcon } from "@heroicons/react/outline";
import Charizard from "../media/charizard.png";
import Pikachu from "../media/pikachu.png";
import Blastoise from "../media/blastoise.png";

const InstructionsPopup = ({ open, setOpen }) => {
  useEffect(() => {
    if (!localStorage.tutorial) setOpen(true);
  }, []);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => {
          localStorage.setItem("tutorial", JSON.stringify([]));
          setOpen(false);
        }}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="pb-2 text-lg leading-6 font-bold text-customGray">
                    GUESS ALL THE POKEMON
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="pb-2 text-md text-left text-gray-500">
                      Select a unique pokemon by clicking on its card until you have chosen each pokemon once.
                    </p>
                    <p className="pb-2 text-md text-left text-gray-500">
                      If you choose a pokemon more than once, you lose and the game starts over.
                    </p>
                    <p className="pb-2 text-md text-left text-gray-500">
                      After each guess the cards will shuffle and change order to keep it interesting!
                    </p>
                    <hr className="my-4 border-px border-customGray" />
                    <p className="pb-2 text-md text-left font-bold text-customGray">Examples</p>
                    <div>
                      <div className="flex justify-evenly">
                        <img src={Charizard} alt="" className="h-[100px] w-[100px]" />
                        <ArrowRightIcon stroke="#6b7280" className="max-w-[50px]" />
                        <img src={Pikachu} alt="" className="h-[100px] w-[100px]" />
                        <CheckIcon stroke="green" className="max-w-[60px]" />
                      </div>
                      <p className="pb-6 text-lg text-center font-semibold text-customGray">Correct guess</p>
                    </div>
                    <div>
                      <div className="flex justify-evenly">
                        <img src={Blastoise} alt="" className="h-[100px] w-[100px]" />
                        <ArrowRightIcon stroke="#6b7280" className="max-w-[50px]" />
                        <img src={Blastoise} alt="" className="h-[100px] w-[100px]" />
                        <XIcon stroke="red" className="max-w-[60px]" />
                      </div>
                      <p className="pb-2 text-lg text-center font-semibold text-customGray">
                        Incorrect guess
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-customRed text-base font-medium text-white sm:text-sm hover:bg-customDarkRed focus:outline-none"
                  onClick={() => {
                    localStorage.setItem("tutorial", JSON.stringify([]));
                    setOpen(false);
                  }}
                >
                  GOT IT
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default InstructionsPopup;
