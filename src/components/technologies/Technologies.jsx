import React from 'react'
import { TbBrandNextjs } from 'react-icons/tb'
import { GrReactjs } from 'react-icons/gr'
import { DiCss3, DiJava, DiJavascript1 } from 'react-icons/di'
import { SiHeroku, SiMysql, SiSpring, SiTailwindcss } from 'react-icons/si'

const Technologies = () => {
  return (
    <>
      <section className="py-20 pb-20 my-20">
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
          <p className="md:text-2xl text-gray-700 font-lightl pb-2">
            " Mejora el rendimiento y el tiempo de procesamiento,
            <br /> organiza mejor tu almacén con el eficiente sistema de
            inventario "
          </p>
          <p className="text-gray-700 font-lightl pb-2">
            Usamos las mejores herramientas tecnológicas para desarrollar
            nuestra plataforma
          </p>

          <div className="flex flex-wrap justify-center lg:justify-between">
            <TbBrandNextjs className="w-12 h-12 cursor-pointer mx-10 my-6 text-gray-400 hover:text-black md:mx-12 lg:m-0" />
            <GrReactjs className="w-12 h-12 cursor-pointer  mx-10 my-6 text-gray-400 hover:text-blue-400 md:mx-12 lg:m-0" />
            <DiJavascript1 className="w-12 h-12 cursor-pointer mx-10 my-6 text-gray-400 hover:text-yellow-400 md:mx-12 lg:m-0" />
            <DiCss3 className="w-12 h-12 cursor-pointer mx-10 my-6 text-gray-400 hover:text-orange-400 md:mx-12 lg:m-0" />
            <SiTailwindcss className="w-12 h-12 cursor-pointer mx-10 my-6 text-gray-400 hover:text-blue-500 md:mx-12 lg:m-0" />
            <DiJava className="w-12 h-12 cursor-pointer  mx-10 my-6 text-gray-400 hover:text-blue-400  md:mx-12 lg:m-0" />
            <SiSpring className="w-12 h-12 cursor-pointer mx-10 my-6 text-gray-400 hover:text-green-500 md:mx-12 lg:m-0" />
            <SiMysql className="w-12 h-12 cursor-pointer  mx-10 my-6 text-gray-400 hover:text-blue-900  md:mx-12 lg:m-0" />
            <SiHeroku className="w-12 h-12 cursor-pointer  mx-10 my-6 text-gray-400 hover:text-purple-800 md:mx-12 lg:m-0" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Technologies
