import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, Text, TextField } from "@radix-ui/themes";
import { NavBarDropdown } from "./navbar-dropdown";
import { NavBarSegmentedControl } from "./navbar-segmented-control";

export function NavBar() {
  return (
    <header>
      <Flex 
        justify='between' 
        align='center'
        px={{initial: '4', sm: '6', xl: '8'}}
        py={{initial: '4', sm: '5', xl: '6'}}
      >
        <Text
          weight='bold' 
          size={{initial: '4', sm: '6', xl: '8'}}
          style={{color: 'var(--accent-12)'}}
        >
          (17) Mensagens
        </Text>
        <NavBarDropdown />
      </Flex>
      <TextField.Root 
        placeholder="Procure um amigo…"
        radius="full"
        mx={{initial: '4', sm: '6', xl: '8'}}
      >
	      <TextField.Slot>
		      <MagnifyingGlassIcon height="24" width="24" style={{color: 'var(--accent-12)'}}/>
	      </TextField.Slot>
      </TextField.Root>

      <NavBarSegmentedControl />
    </header>
  )
}