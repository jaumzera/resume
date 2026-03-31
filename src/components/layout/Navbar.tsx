import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import MenuIcon from '@mui/icons-material/Menu'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { useColorMode } from '../../contexts/ColorModeContext'
import { useTheme } from '@mui/material/styles'

const NAV_ITEMS = [
  { label: 'About',          id: 'about' },
  { label: 'Experience',     id: 'experience' },
  { label: 'Tech Stack',     id: 'tech-stack' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact',        id: 'contact' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const { mode, toggleColorMode } = useColorMode()
  const theme = useTheme()
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Scroll shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Active section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-35% 0px -60% 0px' },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const isDark = mode === 'dark'

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled
            ? isDark ? 'rgba(11,17,32,0.85)' : 'rgba(255,255,255,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
          transition: 'background-color 0.25s ease, border-color 0.25s ease',
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            maxWidth: 1200,
            width: '100%',
            mx: 'auto',
            px: { xs: 2, md: 3 },
            minHeight: { xs: 52, md: 56 },
          }}
        >
          {/* Logo */}
          <Typography
            variant="subtitle1"
            fontWeight={800}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{
              cursor: 'pointer',
              color: 'text.primary',
              letterSpacing: '-0.5px',
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 4 },
              fontSize: '1rem',
            }}
          >
            JM
          </Typography>

          {/* Desktop nav links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.25, flexGrow: 1 }}>
            {NAV_ITEMS.map(({ label, id }) => {
              const active = activeSection === id
              return (
                <Button
                  key={id}
                  onClick={() => scrollTo(id)}
                  size="small"
                  sx={{
                    color: active ? 'primary.main' : 'text.secondary',
                    fontWeight: active ? 600 : 400,
                    fontSize: '0.8rem',
                    px: 1.5,
                    py: 0.5,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: active ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                      width: '60%',
                      height: '2px',
                      bgcolor: 'primary.main',
                      borderRadius: 1,
                      transition: 'transform 0.2s ease',
                    },
                    '&:hover': {
                      color: 'text.primary',
                      background: 'transparent',
                    },
                  }}
                >
                  {label}
                </Button>
              )
            })}
          </Box>

          {/* Right actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <IconButton
              onClick={toggleColorMode}
              size="small"
              sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
            >
              {mode === 'dark' ? <LightModeIcon sx={{ fontSize: 18 }} /> : <DarkModeIcon sx={{ fontSize: 18 }} />}
            </IconButton>

            <Button
              variant="outlined"
              size="small"
              startIcon={<FileDownloadIcon sx={{ fontSize: 14 }} />}
              onClick={() => window.print()}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                ml: 1,
                fontSize: '0.75rem',
                color: 'text.secondary',
                borderColor: 'divider',
                '&:hover': { borderColor: 'text.secondary', color: 'text.primary' },
              }}
            >
              Resume
            </Button>

            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.secondary' }}
              size="small"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 220 } }}
      >
        <List sx={{ pt: 2 }}>
          {NAV_ITEMS.map(({ label, id }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton
                selected={activeSection === id}
                onClick={() => { setMobileOpen(false); setTimeout(() => scrollTo(id), 150) }}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{ fontSize: '0.9rem' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ pt: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              size="small"
              startIcon={<FileDownloadIcon />}
              onClick={() => { setMobileOpen(false); window.print() }}
            >
              Export PDF
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
