import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { IModalProps } from "./Modal.types";

const Modal: React.FC<IModalProps> = ({ closeModal, isOpen }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[600px] transform overflow-hidden rounded-2xl bg-white p-6 md:py-12 md:px-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg md:text-xl font-bold leading-6 text-gray-900"
                  >
                    Disclaimer
                  </Dialog.Title>
                  <div className="mt-3">
                    <p className="text-sm md:text-base leading-6 text-gray-500">
                      This app is not currently published on the App Store or
                      Play Store. However, you can download the Android APK file
                      by clicking the button below. For iOS, you can build the{" "}
                      <a
                        target="_blank"
                        href="https://github.com/harmony-x/Paypeer"
                        className="text-blue-600 underline"
                      >
                        codebase
                      </a>{" "}
                      and run it on your iPhone. Feel free to contact us for
                      more information or a demo.
                    </p>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-black1 px-6 py-2 text-sm md:text-base font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-black1 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Download APK
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
