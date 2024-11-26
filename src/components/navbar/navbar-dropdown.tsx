import { PersonIcon, DotsVerticalIcon, MoonIcon, SunIcon, GearIcon } from "@radix-ui/react-icons";
import { DropdownMenu, Flex, IconButton, Select } from "@radix-ui/themes";
import { NavBarDialogAlert } from "./navbar-dialog-alert";
import { ThemeType } from "../../@types/theme-type";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export function NavBarDropdown () {
  const {theme, setTheme} = useContext(ThemeContext)
  const data = {
    light: { label: "Claro", icon: <SunIcon /> },
    dark: { label: "Escuro", icon: <MoonIcon /> },
  };

  if (!theme) return
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton variant="ghost" radius="full" style={{color: 'var(--accent-12)'}}>
          <DotsVerticalIcon width='24' height='24' />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <PersonIcon />
          Adicionar contato
        </DropdownMenu.Item>

        <DropdownMenu.Item>
          <GearIcon />
          Configurações
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <Select.Root value={theme} onValueChange={(value: ThemeType) => setTheme(value)}>
          <Select.Trigger>
            <Flex as="span" align="center" gap="2">
              {data[theme].icon}
              {data[theme].label}
            </Flex>
          </Select.Trigger>
          <Select.Content position="popper">
            <Select.Item value="light">Claro</Select.Item>
            <Select.Item value="dark">Escuro</Select.Item>
          </Select.Content>
			  </Select.Root>
        <DropdownMenu.Separator />

        <NavBarDialogAlert />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}