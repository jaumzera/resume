import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useTheme } from '@mui/material/styles'
import Section, { SectionTitle } from '../layout/Section'
import ExperienceDrawer from './ExperienceDrawer'
import { experience, type ExperienceEntry } from '../../data/resume'

function ExperienceCard({ job, onViewDetails }: { job: ExperienceEntry; onViewDetails: () => void }) {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Card
      sx={{
        mb: 2,
        borderLeft: `3px solid ${theme.palette.primary.main}`,
        '&:hover': {
          transform: 'translateX(3px)',
          boxShadow: isDark
            ? '0 4px 24px rgba(129,140,248,0.1)'
            : '0 4px 24px rgba(79,70,229,0.1)',
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        {/* Header row */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ sm: 'flex-start' }}
          gap={1}
          sx={{ mb: 1.5 }}
        >
          <Box>
            <Typography variant="h6" fontWeight={700} lineHeight={1.25} sx={{ fontSize: '1rem' }}>
              {job.role}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
              {job.url ? (
                <Link href={job.url} target="_blank" rel="noopener" color="inherit" underline="hover">
                  {job.company}
                </Link>
              ) : job.company}
              {' · '}{job.location}
            </Typography>
          </Box>
          <Chip
            label={job.period}
            size="small"
            sx={{
              fontSize: '0.7rem',
              fontWeight: 500,
              bgcolor: isDark ? 'rgba(129,140,248,0.1)' : 'rgba(79,70,229,0.07)',
              color: 'primary.main',
              border: 'none',
              flexShrink: 0,
            }}
          />
        </Stack>

        {/* Bullets */}
        <Stack spacing={0.75} sx={{ mb: 2 }}>
          {job.bullets.slice(0, 3).map((b, i) => (
            <Stack key={i} direction="row" spacing={1.25} alignItems="center">
              <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'primary.main', flexShrink: 0 }} />
              <Typography variant="body2" color="text.secondary" lineHeight={1.65}>{b}</Typography>
            </Stack>
          ))}
        </Stack>

        {/* Tech chips */}
        <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 2 }}>
          {job.details.techStack.slice(0, 6).map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              variant="outlined"
              sx={{
                fontSize: '0.68rem',
                height: 22,
                borderColor: 'divider',
                color: 'text.secondary',
              }}
            />
          ))}
        </Stack>

        <Button
          size="small"
          endIcon={<ArrowForwardIcon sx={{ fontSize: '14px !important' }} />}
          onClick={onViewDetails}
          sx={{
            color: 'primary.main',
            p: 0,
            minWidth: 0,
            fontWeight: 600,
            fontSize: '0.78rem',
            '&:hover': { background: 'none', opacity: 0.75 },
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}

export default function Experience() {
  const [selected, setSelected] = useState<ExperienceEntry | null>(null)

  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      {experience.map((job) => (
        <ExperienceCard
          key={`${job.company}-${job.period}`}
          job={job}
          onViewDetails={() => setSelected(job)}
        />
      ))}
      <ExperienceDrawer job={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
