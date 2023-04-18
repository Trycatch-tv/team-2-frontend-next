import { useForm } from '@/hooks'
import { AuthLayout } from '@/layout'
import { authLogin } from '@/store/slices/auth/thunks'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

const initialForm = {
  email: 'example@example.com',
  password: 'password '
}
const login = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [formValue, handleInputChange, reset] = useForm(initialForm)

  const { email, password } = formValue

  const onSignIn = e => {
    e.preventDefault()
    if (email.length <= 0 && password.length <= 0)
      return alert('Ingrese correo y contraseña')

    dispatch(authLogin({ email, password }))
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
                Acceda a su cuenta
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={onSignIn}>
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
                <div className="flex items-center justify-between">
                  <NextLink
                    href="#"
                    className="text-sm font-medium text-emerald-800 hover:underline "
                  >
                    Forgot password?
                  </NextLink>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-emerald-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{' '}
                  <NextLink
                    href="/auth/register"
                    className="font-medium text-emerald-800 hover:underline dark:text-primary-500"
                  >
                    Sign up
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
export default login
