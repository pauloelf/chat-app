import { SegmentedControl } from "@radix-ui/themes";
import { SegmentedControlContext } from "../../contexts/segmented-control-context";
import { useContext } from "react";
import { SegmentType } from "../../@types/segmented-control-type";

export function NavBarSegmentedControl() {
  const { segment, setSegment } = useContext(SegmentedControlContext)
  return (
    <SegmentedControl.Root 
      defaultValue={segment}
      onValueChange={(value: SegmentType) => setSegment(value)}
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