import { createContext, useContext, useState, useMemo, type ReactNode } from 'react'
import { type PaletteMode } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { createAppTheme } from '../theme'

interface ColorModeContextType {
  mode: PaletteMode
  toggleColorMode: () => void
}

const ColorModeContext = createContext<ColorModeContextType>({
  mode: 'light',
  toggleColorMode: () => {},
})

export function useColorMode() {
  return useContext(ColorModeContext)
}

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const stored = (localStorage.getItem('colorMode') as PaletteMode | null) ?? 'dark'
  const [mode, setMode] = useState<PaletteMode>(stored)

  const colorMode = useMemo(() => ({
    mode,
    toggleColorMode: () => {
      setMode((prev) => {
        const next = prev === 'light' ? 'dark' : 'light'
        localStorage.setItem('colorMode', next)
        return next
      })
    },
  }), [mode])

  const theme = useMemo(() => createAppTheme(mode), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
