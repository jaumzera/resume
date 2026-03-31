import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Section, { SectionTitle } from '../layout/Section'
import { certifications } from '../../data/resume'
import { useTheme } from '@mui/material/styles'

const ICON: Record<string, string> = {
  'Cloud Native Foundation': '☸️',
  'Scrum.org': '🔄',
  Oracle: '☕',
}

export default function Certifications() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const highlighted = certifications.filter(c => c.highlighted)
  const others      = certifications.filter(c => !c.highlighted)

  const cardBase = {
    height: '100%',
    boxShadow: 'none',
    border: '1px solid',
    borderColor: 'divider',
    bgcolor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)',
    transition: 'transform 0.2s ease, border-color 0.2s ease',
    '&:hover': {
      transform: 'translateY(-3px)',
      borderColor: 'primary.main',
    },
  }

  return (
    <Section id="certifications">
      <SectionTitle>Certifications</SectionTitle>

      {/* Highlighted */}
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        {highlighted.map((cert) => (
          <Grid key={cert.title} size={{ xs: 12, sm: 6 }}>
            <Card sx={cardBase}>
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box sx={{ fontSize: '1.6rem', lineHeight: 1, mt: 0.25 }}>
                    {ICON[cert.issuer] ?? '🏅'}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" fontWeight={700} lineHeight={1.3} sx={{ mb: 0.75 }}>
                      {cert.title}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="caption" color="text.secondary">
                        {cert.issuer}
                      </Typography>
                      <Chip
                        label={cert.year}
                        size="small"
                        sx={{
                          height: 18,
                          fontSize: '0.65rem',
                          fontWeight: 600,
                          bgcolor: isDark ? 'rgba(129,140,248,0.1)' : 'rgba(79,70,229,0.07)',
                          color: 'primary.main',
                          border: 'none',
                        }}
                      />
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Other certifications */}
      <Typography
        variant="overline"
        color="text.secondary"
        sx={{ display: 'block', mb: 1.5, letterSpacing: 1.5, fontSize: '0.68rem' }}
      >
        Oracle Certifications
      </Typography>

      <Stack spacing={1}>
        {others.map((cert) => (
          <Card key={cert.title} sx={{ ...cardBase, '&:hover': { transform: 'none', borderColor: 'divider' } }}>
            <CardContent sx={{ p: '12px 16px !important' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box sx={{ fontSize: '1rem' }}>{ICON[cert.issuer] ?? '🏅'}</Box>
                  <Typography variant="body2" fontWeight={500}>
                    {cert.title}
                  </Typography>
                </Stack>
                <Typography variant="caption" color="text.secondary" sx={{ flexShrink: 0, ml: 1 }}>
                  {cert.year}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Section>
  )
}
