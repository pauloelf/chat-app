import { createContext, useState } from "react"
import { ThemeContextProviderType, ThemeContextType, ThemeType } from "../@types/theme-type"

const defaultValues: ThemeContextType = {
  theme: 'light',
  setTheme: () => ''
}

export const ThemeContext = createContext<ThemeContextType>(defaultValues)

export function ThemeContextProvider({children}: ThemeContextProviderType) {
  const [theme, setTheme] = useState<ThemeType>('light')
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}