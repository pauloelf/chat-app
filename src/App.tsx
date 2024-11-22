import { useAuthState } from "react-firebase-hooks/auth"
import { SignIn } from "./components/sign-in"
import { auth } from "./services/firebase-config"

export function App() {
  const [user] = useAuthState(auth)

  return (
    <>
      {user ? <h1>Content</h1> : <SignIn /> }
    </>
  )
}