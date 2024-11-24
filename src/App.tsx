import '@radix-ui/themes/styles.css'
import './App.css'
import { useAuthState } from "react-firebase-hooks/auth"
import { SignIn } from "./components/sign-in"
import { auth } from "./services/firebase-config"
import { Theme } from '@radix-ui/themes'

export function App() {
  const [user] = useAuthState(auth)

  return (
    <Theme accentColor='blue'>
      {user ? <h1>Content</h1> : <SignIn />}
    </Theme>
  )
}