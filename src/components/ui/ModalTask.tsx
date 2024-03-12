import { useState } from "react";
import { RiCloseFill, RiMoreFill } from "react-icons/ri";

export default function ModalTask() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <span
        className="flex items-center justify-center rounded-md border border-[#0000001a] text-black bg-white h-6 w-6 font-semibold"
        onClick={() => setIsOpenModal(true)}
      >
        <RiMoreFill />
      </span>

      {isOpenModal && (
        <div className="modal fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10">
          <div className="bg-white p-2 rounded flex flex-col justify-center items-center gap-5 w-1/2 md:w-11/12">
            <div className="flex flex-col w-full">
              <div className="flex justify-end items-center">
                <button
                  className="flex text-right   close-btn rounded-full border border-gray-500 hover:bg-gray-500 hover:text-white"
                  onClick={() => setIsOpenModal(false)}
                >
                  <RiCloseFill className="w-6 h-6" />
                </button>
              </div>
              <div className="form">
                <h1 className="text-2xl font-bold">Crear Tarea</h1>
                <p className="text-gray-500">Pronto</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
