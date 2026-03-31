import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Section, { SectionTitle } from '../layout/Section'
import { skills } from '../../data/resume'
import { useTheme } from '@mui/material/styles'

const TIERS = [
  {
    key: 'core' as const,
    label: 'Core Expertise',
    description: 'Primary stack — used daily in production systems',
  },
  {
    key: 'strong' as const,
    label: 'Strong Working Knowledge',
    description: 'Regularly applied in professional contexts',
  },
  {
    key: 'exposure' as const,
    label: 'Additional Exposure',
    description: 'Used in specific projects or actively explored',
  },
]

export default function TechStack() {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Section id="tech-stack">
      <SectionTitle>Tech Stack</SectionTitle>

      <Stack spacing={4}>
        {TIERS.map((tier, idx) => (
          <Box key={tier.key}>
            <Stack direction="row" alignItems="baseline" spacing={2} sx={{ mb: 1.25 }}>
              <Typography variant="subtitle1" fontWeight={700} sx={{ fontSize: '0.9rem' }}>
                {tier.label}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {tier.description}
              </Typography>
            </Stack>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {skills[tier.key].map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={
                    idx === 0
                      ? {
                          // Core: filled
                          bgcolor: isDark ? 'rgba(129,140,248,0.15)' : 'rgba(79,70,229,0.1)',
                          color: 'primary.main',
                          border: '1px solid',
                          borderColor: isDark ? 'rgba(129,140,248,0.3)' : 'rgba(79,70,229,0.25)',
                          fontWeight: 600,
                          fontSize: '0.78rem',
                          height: 28,
                        }
                      : idx === 1
                      ? {
                          // Strong: outlined
                          bgcolor: 'transparent',
                          color: 'text.primary',
                          border: '1px solid',
                          borderColor: 'divider',
                          fontWeight: 500,
                          fontSize: '0.78rem',
                          height: 28,
                        }
                      : {
                          // Exposure: subtle
                          bgcolor: 'transparent',
                          color: 'text.secondary',
                          border: '1px solid',
                          borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                          fontWeight: 400,
                          fontSize: '0.78rem',
                          height: 28,
                        }
                  }
                />
              ))}
            </Stack>

            {idx < TIERS.length - 1 && (
              <Box
                sx={{
                  mt: 3,
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                }}
              />
            )}
          </Box>
        ))}
      </Stack>
    </Section>
  )
}
