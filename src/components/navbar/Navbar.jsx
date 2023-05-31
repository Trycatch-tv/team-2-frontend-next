import { useSelector } from 'react-redux'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LoginMenu } from './LoginMenu'
import { ProfileMenu } from './ProfileMenu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()

  const navLink = [
    {
      name: 'Productos',
      link: '/productos'
    },
    {
      name: 'Categorias',
      link: '/categories'
    },
    {
      name: 'Marcas',
      link: '/brands'
    },
    {
      name: 'Medidas',
      link: '/mea'
    }
  ]

  const { uid } = useSelector(state => state.auth)
  return (
    <Disclosure as="nav" className="bg-gray-100">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="/logo-redim.png"
                      alt="E-Commerce"
                    />
                  </a>
                  <a href="/">
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="/logo-redim.png"
                      alt="E-Commerce"
                    />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navLink.map(({ link, name }) => {
                      const isActive = pathname.startsWith(link)
                      return (
                        <Link
                          key={name}
                          href={link}
                          className={` ${
                            isActive
                              ? 'bg-emerald-800 text-white'
                              : 'text-gray-800 hover:bg-emerald-800 hover:text-white'
                          } rounded-md px-3 py-2 text-sm font-medium `}
                        >
                          {name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
              {}
              <div className=" absolute inset-y-0 right-0 flex items-center pr-2  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {!!uid ? <ProfileMenu /> : <LoginMenu />}
              </div>
            </div>
          </div>
          {/* mobile links */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 mb-12">
              {navLink.map(({ link, name }) => {
                const isActive = pathname.startsWith(link)
                return (
                  <Disclosure.Button
                    key={name}
                    as="a"
                    href={link}
                    className={` ${
                      isActive
                        ? 'bg-emerald-800 text-white'
                        : 'text-gray-800 hover:bg-emerald-800 hover:text-white'
                    }  block rounded-md px-3 py-2 text-base font-medium`}
                  >
                    {name}
                  </Disclosure.Button>
                )
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
