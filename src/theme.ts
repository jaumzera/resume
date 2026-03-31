import { createTheme, type PaletteMode } from '@mui/material/styles'

export function createAppTheme(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#4F46E5' : '#818CF8',
        contrastText: '#ffffff',
      },
      secondary: {
        main: mode === 'light' ? '#7C3AED' : '#A78BFA',
      },
      background: {
        default: mode === 'light' ? '#F8FAFC' : '#0B1120',
        paper:   mode === 'light' ? '#FFFFFF'  : '#131C2E',
      },
      text: {
        primary:   mode === 'light' ? '#0F172A' : '#E2E8F0',
        secondary: mode === 'light' ? '#64748B' : '#7C8FA6',
      },
      divider: mode === 'light' ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.06)',
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h1: { fontWeight: 800, letterSpacing: '-1.5px' },
      h2: { fontWeight: 700, letterSpacing: '-0.5px' },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
    },
    shape: { borderRadius: 10 },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundImage: 'none',
            boxShadow: mode === 'light'
              ? '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)'
              : '0 1px 3px rgba(0,0,0,0.4),  0 4px 12px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
            transition: 'all 0.15s ease',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 500, transition: 'all 0.15s ease' },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: { backgroundImage: 'none' },
        },
      },
    },
  })
}
