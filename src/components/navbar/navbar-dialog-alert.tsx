import { ExitIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { auth } from "../../services/firebase-config";

export function NavBarDialogAlert() {
  return (
    <AlertDialog.Root>
	    <AlertDialog.Trigger>
		    <Button color="red">
          <ExitIcon />
          Sair
        </Button>
	    </AlertDialog.Trigger>
	    <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Sair da conta</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Tem certeza que deseja sair da conta?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancela
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={() => auth.signOut()}>
              Sair
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}