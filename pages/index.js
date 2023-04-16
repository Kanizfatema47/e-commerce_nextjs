
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex justify-center items-center ">
        <div className="bg-white p-3 rounded">
          <button onClick={() => signIn('google')} className="text-red-500 ">Login with google</button>

        </div>
      </div>
    )
  }

  return (
    <div>Logged in{session.user.email}</div>
  )

}
