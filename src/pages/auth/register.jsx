import { useForm } from '@/hooks'
import { AuthLayout } from '@/layout'
import { authRegister } from '@/store/slices/auth/thunks'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'

const initialForm = {
  name: 'example',
  email: 'example@example.com',
  password: 'password'
}
const Register = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [formValue, handleInputChange, reset] = useForm(initialForm)

  const { name, email, password } = formValue
  const onRegister = e => {
    e.preventDefault()
    if (name.lenght <= 0 && email.lenght <= 0 && password.lenght <= 0)
      return alert('Ingrese sus datos')

    dispatch(authRegister(formValue))
    router.replace('/')
  }
  return (
    <AuthLayout title="Auth | Login" description="Login Page">
      <section className="bg-gray-50 ">
        <article className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <NextLink
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            <img className="w-full h-12 " src="/logo-redim.png" alt="logo" />
          </NextLink>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Crea una cuenta
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={onRegister}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    className="bg-gray-50 border border-emerald-800 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-800 focus:border-emerald-800 block w-full p-2.5  "
                    id="name"
                    name="name"
                    onChange={handleInputChange}
                    placeholder="your name"
                    required
                    type="text"
                    value={name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    className="bg-gray-50 border border-emerald-800 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-800 focus:border-emerald-800 block w-full p-2.5  "
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    required=""
                    type="email"
                    value={email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Contraseña
                  </label>
                  <input
                    className="bg-gray-50 border border-emerald-800 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-800 focus:border-emerald-800 block w-full p-2.5  "
                    id="password"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    required=""
                    type="password"
                    value={password}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-emerald-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign Up
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Do you have an account?{' '}
                  <NextLink
                    href="/auth/login"
                    className="font-medium text-emerald-800 hover:underline dark:text-primary-500"
                  >
                    Sign In
                  </NextLink>
                </p>
              </form>
            </div>
          </div>
        </article>
      </section>
    </AuthLayout>
  )
}
export default Register
