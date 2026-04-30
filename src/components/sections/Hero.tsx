import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { useTheme } from '@mui/material/styles'
import { header, heroMetrics } from '../../data/resume'

const CHIPS = ['Java', 'Spring Boot', 'Kubernetes', 'AWS', 'Distributed Systems', 'AI / LLM']

const CSS = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(6px); }
  }
`

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: isDark
          ? 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,70,229,0.18) 0%, transparent 70%), #0B1120'
          : 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,70,229,0.08) 0%, transparent 70%), #F8FAFC',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{CSS}</style>

      <Container maxWidth="md" sx={{ textAlign: 'center', pt: 12, pb: 10 }}>

        {/* Avatar */}
        <Box sx={{ animation: 'fadeUp 0.5s ease both', animationDelay: '0.05s', mb: 3 }}>
          <Avatar
            src={`${import.meta.env.BASE_URL}avatar.webp`}
            alt={header.name}
            sx={{
              width: { xs: 72, sm: 96 },
              height: { xs: 72, sm: 96 },
              mx: 'auto',
              border: `2px solid ${theme.palette.divider}`,
              boxShadow: isDark
                ? '0 0 0 6px rgba(129,140,248,0.12)'
                : '0 0 0 6px rgba(79,70,229,0.08)',
            }}
          />
        </Box>

        {/* Name */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            animation: 'fadeUp 0.5s ease both',
            animationDelay: '0.12s',
            fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
            fontWeight: 800,
            letterSpacing: '-1.5px',
            mb: 1,
          }}
        >
          {header.name}
        </Typography>

        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            animation: 'fadeUp 0.5s ease both',
            animationDelay: '0.2s',
            color: 'primary.main',
            fontWeight: 600,
            fontSize: { xs: '1rem', md: '1.2rem' },
            letterSpacing: '0.3px',
            mb: 0.75,
          }}
        >
          {header.title}
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            animation: 'fadeUp 0.5s ease both',
            animationDelay: '0.27s',
            color: 'text.secondary',
            fontSize: { xs: '0.85rem', md: '0.95rem' },
            letterSpacing: '0.5px',
            mb: 2.5,
          }}
        >
          {header.subtitle}
        </Typography>

        {/* Tagline */}
        <Typography
          variant="body1"
          sx={{
            animation: 'fadeUp 0.5s ease both',
            animationDelay: '0.32s',
            color: 'text.secondary',
            maxWidth: 500,
            mx: 'auto',
            mb: 3.5,
            lineHeight: 1.7,
            fontSize: '0.95rem',
          }}
        >
          {header.tagline}
        </Typography>

        {/* Tech chips */}
        <Stack
          direction="row"
          justifyContent="center"
          flexWrap="wrap"
          gap={1}
          sx={{ animation: 'fadeUp 0.5s ease both', animationDelay: '0.38s', mb: 4 }}
        >
          {CHIPS.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                bgcolor: isDark ? 'rgba(129,140,248,0.1)' : 'rgba(79,70,229,0.07)',
                color: 'primary.main',
                border: '1px solid',
                borderColor: isDark ? 'rgba(129,140,248,0.25)' : 'rgba(79,70,229,0.2)',
                fontWeight: 500,
                fontSize: '0.75rem',
              }}
            />
          ))}
        </Stack>

        {/* CTAs */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ animation: 'fadeUp 0.5s ease both', animationDelay: '0.44s', mb: 6 }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => scrollTo('experience')}
            sx={{
              px: 3.5,
              background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
              boxShadow: 'none',
              '&:hover': {
                background: 'linear-gradient(135deg, #4338CA 0%, #6D28D9 100%)',
                boxShadow: '0 4px 20px rgba(79,70,229,0.35)',
              },
            }}
          >
            View Experience
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<FileDownloadIcon fontSize="small" />}
            onClick={() => window.print()}
            sx={{
              px: 3,
              borderColor: theme.palette.divider,
              color: 'text.secondary',
              '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
            }}
          >
            Download Resume
          </Button>
        </Stack>

        {/* Metrics row */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            />
          }
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 1, sm: 3 }}
          sx={{
            animation: 'fadeUp 0.5s ease both',
            animationDelay: '0.5s',
            maxWidth: { xs: '100%', sm: 420 },
            mx: 'auto',
          }}
        >
          {heroMetrics.map((m) => (
            <Box key={m.label} sx={{ textAlign: 'center', flex: { sm: 1 } }}>
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{ color: 'primary.main', lineHeight: 1, fontSize: { xs: '1rem', sm: '1.5rem' } }}
              >
                {m.value}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                {m.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>

      {/* Scroll cue */}
      <Box
        onClick={() => scrollTo('about')}
        sx={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          cursor: 'pointer',
          color: 'text.disabled',
          animation: 'bounce 2s ease-in-out infinite',
          '&:hover': { color: 'text.secondary' },
          transition: 'color 0.2s',
        }}
      >
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  )
}
