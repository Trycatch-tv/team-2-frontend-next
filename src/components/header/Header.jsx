import React from 'react'
import NextLink from 'next/link'

const Header = () => {
  return (
    <>
      <div className="bg-gray-100 py-6 md:py-12">
        <div className="container px-4 mx-auto ">
          <div className="text-left px-12 py-4 mx-auto md:flex md:flex-wrap">
            <h1 className="text-3xl py-4 md:text-4xl font-medium mb-2">
              Plataforma para la gestion de inventario
            </h1>
            <h6>
              Con nuestra herramienta podrás automatizar los aspectos de la
              gestión de inventarios y almacenes, agilizando las tareas
              necesarias para realizar un seguimiento eficaz de las existencias.
              Con un sistema de control de inventarios podrás calcular la
              cantidad exacta de mercancía disponible, la rotación de inventario
              y las unidades que están por acabarse.
            </h6>
            <div className="flex justify-center py-4">
              <NextLink href="/auth/login">
                <button
                  type="button"
                  className="inline-flex text-white bg-blue-500 py-3 px-12 focus:outline-none hover:bg-opacity-80 rounded-md text-lg"
                >
                  Ingresar
                </button>
              </NextLink>
            </div>
            <div className="mt-4">
              <img
                src="/images/im.png"
                alt="product-table"
                className="d-block max-w-full rounded shadow-md"
              />
            </div>
          </div>

          <div className="md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12">
            <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
              <span className="inline-block mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </span>
              <h5 className="text-xl font-medium uppercase mb-4">
                Optimización de inventario
              </h5>
              <p className="text-gray-600">
                Genera un inventario de alto rendimiento que tiene el máximo
                potencial para una gran rotación financiera.
              </p>
            </div>

            <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
              <span className="inline-block mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                  />
                </svg>
              </span>
              <h5 className="text-xl font-medium uppercase mb-4">
                Agrupación por categorias
              </h5>
              <p className="text-gray-600">
                Recopile inventario en categorías predefinidas.
              </p>
            </div>

            <div className="md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center">
              <span className="inline-block mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </span>
              <h5 className="text-xl font-medium uppercase mb-4">
                Control del stock
              </h5>
              <p className="text-gray-600">
                Garantiza que tus clientes estén siempre satisfechos con la
                disponibilidad de los productos al realiza sus compras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
