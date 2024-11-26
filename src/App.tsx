import '@radix-ui/themes/styles.css'
import './App.css'
import { useAuthState } from "react-firebase-hooks/auth"
import { SignIn } from "./components/sign-in"
import { auth } from "./services/firebase-config"
import { Theme } from '@radix-ui/themes'
import { NavBar } from './components/navbar/navbar'
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme-context'

export function App() {
  const [user] = useAuthState(auth)
  const { theme } = useContext(ThemeContext)

  return (
    <Theme appearance={theme} accentColor='indigo' style={{backgroundColor: 'var(--accent-2)'}}>
      {user ? <NavBar /> : <SignIn />}
    </Theme>
  )
}