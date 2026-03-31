import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Section, { SectionTitle } from '../layout/Section'
import { highlights, aboutHighlights } from '../../data/resume'
import { useTheme } from '@mui/material/styles'

export default function About() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Section id="about">
      <Grid container spacing={7} alignItems="flex-start">

        {/* Left: text */}
        <Grid size={{ xs: 12, md: 7 }}>
          <SectionTitle>About</SectionTitle>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.85, fontSize: '1rem', mb: 3.5 }}
          >
            Senior software engineer with over two decades of experience delivering
            production systems across e-commerce, telecom, and agribusiness — from
            national-scale platforms to eBay's global marketplace infrastructure.
          </Typography>

          <Stack spacing={1.5}>
            {aboutHighlights.map((line, i) => (
              <Stack key={i} direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
                <Typography variant="body2" color="text.secondary" lineHeight={1.75}>
                  {line}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>

        {/* Right: stat cards */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Grid container spacing={2}>
            {highlights.map((h) => (
              <Grid key={h.label} size={{ xs: 6 }}>
                <Card
                  sx={{
                    textAlign: 'center',
                    py: 2.5,
                    bgcolor: isDark ? 'rgba(129,140,248,0.05)' : 'rgba(79,70,229,0.04)',
                    border: '1px solid',
                    borderColor: isDark ? 'rgba(129,140,248,0.12)' : 'rgba(79,70,229,0.1)',
                    boxShadow: 'none',
                    '&:hover': { transform: 'translateY(-3px)' },
                  }}
                >
                  <CardContent sx={{ p: '16px !important' }}>
                    <Typography
                      variant="h4"
                      fontWeight={800}
                      sx={{ color: 'primary.main', lineHeight: 1, mb: 0.5 }}
                    >
                      {h.value}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" fontWeight={500}>
                      {h.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  )
}
