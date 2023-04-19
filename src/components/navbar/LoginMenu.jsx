import NextLink from 'next/link'

export const LoginMenu = () => {
  return (
    <>
      <NextLink href="/auth/login">
        <button
          type="button"
          className="hidden sm:block rounded-lg transparent p-2 text-gray-700 hover:text-emerald-800"
        >
          Sign In
        </button>
      </NextLink>
      <NextLink href="/auth/register">
        <button
          type="button"
          className="hidden md:ml-4 sm:block rounded-lg bg-gray-500 p-2 text-gray-100 hover:text-white hover:bg-green-900"
        >
          Sign Up
        </button>
      </NextLink>
    </>
  )
}
