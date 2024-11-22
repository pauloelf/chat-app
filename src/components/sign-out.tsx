import { Button } from '@radix-ui/themes'
import { auth } from '../services/firebase-config.ts'
import { ExitIcon } from '@radix-ui/react-icons'

export function SignOut() {
  
  return auth.currentUser && (
    <Button
      style={{ cursor: 'pointer' }}
      onClick={() => auth.signOut()}
      variant='ghost'
      size='2'
      highContrast
    >
      <ExitIcon />
      Sair
    </Button>
  )
}