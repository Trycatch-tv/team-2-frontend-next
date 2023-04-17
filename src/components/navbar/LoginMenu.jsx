import NextLink from 'next/link'

export const LoginMenu = () => {
  return (
    <>
      <NextLink href="/auth/login">
        <button
          type="button"
          className="hidden md:ml-6 sm:block mr-3 rounded-lg transparent p-3 text-gray-900 outline outline-offset-2 outline-2 outline-emerald-800 hover:text-dark"
        >
          Login
        </button>
      </NextLink>
      <NextLink href="/auth/register">
        <button
          type="button"
          className="hidden md:ml-6 sm:block rounded-lg bg-emerald-800 p-3 text-gray-100 hover:text-white"
        >
          Register
        </button>
      </NextLink>
    </>
  )
}
