import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

const Card = props => {
  return (
    <>
      <div className="mb-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4">
        <div className="flex max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/100 flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img src={props.img} alt="" className="h-full w-full" />
          </div>

          <h2 className="mt-4 font-bold text-xl">{props.name}</h2>
          <h6 className="mt-2 text-sm font-medium">{props.rol}</h6>

          <p className="text-xs text-gray-500 text-center mt-3">
            {props.skills}
          </p>

          {/* iconos */}
          <div
            className="flex items-center justify-center  opacity-50 hover:opacity-100
                                transition-opacity duration-300 mt-5"
          >
            <a
              href={props.linkedin}
              className="flex rounded-full hover:bg-indigo-50 h-12 w-12"
            >
              <i className="text-blue-600 mx-auto  mt-2">
                <AiFillLinkedin />{' '}
              </i>
            </a>

            <a
              href={props.github}
              className="flex rounded-full hover:bg-blue-50 h-12 w-12"
            >
              <i className="mx-auto mt-2">
                <AiFillGithub />
              </i>
            </a>

            <a
              href={props.email}
              className="flex rounded-full hover:bg-red-50 h-12 w-12"
            >
              <i className="text-red-400 mx-auto mt-2 h-30 w-30">
                <SiGmail />
              </i>
            </a>
          </div>
        </div>
        {/* // User 2 */}
        <div className="flex max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/100 flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
          <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img src={props.img2} alt="" className="h-full w-full" />
          </div>

          <h2 className="mt-4 font-bold text-xl">{props.name2}</h2>
          <h6 className="mt-2 text-sm font-medium">{props.rol2}</h6>

          <p className="text-xs text-gray-500 text-center mt-3">
            {props.skills2}
          </p>

          {/* iconos */}
          <div
            className="flex items-center justify-center  opacity-50 hover:opacity-100
                                transition-opacity duration-300 mt-5"
          >
            <a
              href={props.linkedin2}
              className="flex rounded-full hover:bg-indigo-50 h-12 w-12"
            >
              <i className="text-blue-600 mx-auto  mt-2">
                <AiFillLinkedin />{' '}
              </i>
            </a>

            <a
              href={props.github2}
              className="flex rounded-full hover:bg-blue-50 h-12 w-12"
            >
              <i className="mx-auto mt-2">
                <AiFillGithub />
              </i>
            </a>

            <a
              href={props.email2}
              className="flex rounded-full hover:bg-red-50 h-12 w-12"
            >
              <i className="text-red-400 mx-auto mt-2 h-30 w-30">
                <SiGmail />
              </i>
            </a>
          </div>
        </div>

        {/* // User 3 */}
        <div className="flex max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/100 flex-col items-center justify-center bg-white p-4 shadow  rounded-lg">
          <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img src={props.img3} alt="" className="h-full w-full" />
          </div>

          <h2 className="mt-4 font-bold text-xl">{props.name3}</h2>
          <h6 className="mt-2 text-sm font-medium">{props.rol3}</h6>

          <p className="text-xs text-gray-500 text-center mt-3">
            {props.skills3}
          </p>

          {/* iconos */}
          <div
            className="flex items-center justify-center  opacity-50 hover:opacity-100
                                transition-opacity duration-300 mt-5"
          >
            <a
              href={props.linkedin3}
              className="flex rounded-full hover:bg-indigo-50 h-12 w-12"
            >
              <i className="text-blue-600 mx-auto  mt-2">
                <AiFillLinkedin />{' '}
              </i>
            </a>

            <a
              href={props.github3}
              className="flex rounded-full hover:bg-blue-50 h-12 w-12"
            >
              <i className="mx-auto mt-2">
                <AiFillGithub />
              </i>
            </a>

            <a
              href={props.email3}
              className="flex rounded-full hover:bg-red-50 h-12 w-12"
            >
              <i className="text-red-400 mx-auto mt-2 h-30 w-30">
                <SiGmail />
              </i>
            </a>
          </div>
        </div>

        {/* // User 4 */}
        <div className="flex max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/100 flex-col items-center justify-center bg-white p-4 shadow  rounded-lg">
          <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img src={props.img4} alt="" className="h-full w-full" />
          </div>

          <h2 className="mt-4 font-bold text-xl">{props.name4}</h2>
          <h6 className="mt-2 text-sm font-medium">{props.rol4}</h6>

          <p className="text-xs text-gray-500 text-center mt-3">
            {props.skills4}
          </p>

          {/* iconos */}
          <div
            className="flex items-center justify-center  opacity-50 hover:opacity-100
                                transition-opacity duration-300 mt-5"
          >
            <a
              href={props.linkedin4}
              className="flex rounded-full hover:bg-indigo-50 h-12 w-12"
            >
              <i className="text-blue-600 mx-auto  mt-2">
                <AiFillLinkedin />{' '}
              </i>
            </a>

            <a
              href={props.github4}
              className="flex rounded-full hover:bg-blue-50 h-12 w-12"
            >
              <i className="mx-auto mt-2">
                <AiFillGithub />
              </i>
            </a>

            <a
              href={props.email4}
              className="flex rounded-full hover:bg-red-50 h-12 w-12"
            >
              <i className="text-red-400 mx-auto mt-2 h-30 w-30">
                <SiGmail />
              </i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
