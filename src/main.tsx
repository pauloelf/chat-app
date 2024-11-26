import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { ThemeContextProvider } from './contexts/theme-context.tsx'
import { SegmentedControlContextProvider } from './contexts/segment-controled-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <SegmentedControlContextProvider>
        <App />
      </SegmentedControlContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
