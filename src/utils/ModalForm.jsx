import React, { Fragment, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'

export default function ModalForm({ stateModal, closeModal, titulo, initialFocus, children }) {

    return (
        <Transition show={stateModal} as={Fragment}>
            <Dialog
                onClose={closeModal}
                initialFocus={initialFocus}
                as="div"
                className="relative z-50"
            >
                <Transition.Child
                    as={Fragment}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ehttps://www.youtube.com/watch?v=QQ-Fi7coS9oase-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full lg:max-w-1/2 md:max-w-5xl rounded-lg text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg transition-all bg-white">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left [&_h2]:text-base [&_h2]:text-4xl [&_h2]:font-semibold [&_h2]:leading-6 [&_h2]:text-gray-900">
                                        <Dialog.Title>{titulo}</Dialog.Title>
                                    </div>
                                    <div className="mt-2 mb-4 pt-6">
                                        {children}
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}