import { SegmentedControl } from "@radix-ui/themes";

export function NavBarSegmentControl() {
  return (
    <SegmentedControl.Root 
      defaultValue="chats"
      radius="full"
      style={{color: 'var(--accent-12)'}}
      mx={{initial: '4', sm: '6', xl: '8'}}
      my='3'
      size={{
        initial: '2',
        md: '3'
      }}
    >
	    <SegmentedControl.Item value="chats">Conversas</SegmentedControl.Item>
	    <SegmentedControl.Item value="profile">Meu Perfil</SegmentedControl.Item>
    </SegmentedControl.Root>

  )
}