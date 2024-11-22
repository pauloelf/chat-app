import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../services/firebase-config.ts'
import googleIcon from '../assets/google-icon.svg'
import { Button } from '@radix-ui/themes'

export function SignIn() {
  const [ signInWithGoogle ] = useSignInWithGoogle(auth)

  return (
    <Button
      style={{ cursor: 'pointer' }}
      onClick={() => signInWithGoogle()}
      size='3'
      variant='outline'
      radius='full'
      highContrast
    >
      <img
        style={{ width: '20px', height: '20px' }}
        src={googleIcon}
        alt="Google icon"
      />
      Entrar com Google
    </Button>
  )
}