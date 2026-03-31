import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Link from '@mui/material/Link'
import CloseIcon from '@mui/icons-material/Close'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { type ExperienceEntry } from '../../data/resume'

interface Props {
  job: ExperienceEntry | null
  onClose: () => void
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="overline"
        sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1 }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  )
}

export default function ExperienceDrawer({ job, onClose }: Props) {
  if (!job) return null

  return (
    <Drawer
      anchor="right"
      open={!!job}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 580 },
          p: 0,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* Sticky header */}
      <Box
        sx={{
          px: 3,
          pt: 3,
          pb: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" fontWeight={700} lineHeight={1.3}>
            {job.role}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {job.url ? (
              <Link href={job.url} target="_blank" rel="noopener" color="inherit" underline="hover">
                {job.company}
              </Link>
            ) : job.company}{' '}
            · {job.period} · {job.location}
          </Typography>
        </Box>
        <IconButton onClick={onClose} size="small" sx={{ mt: -0.5 }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Scrollable content */}
      <Box sx={{ flex: 1, overflowY: 'auto', p: 3 }}>
        <Block label="Context">
          <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
            {job.details.context}
          </Typography>
        </Block>

        <Divider sx={{ mb: 3 }} />

        <Block label="Responsibilities">
          <List dense disablePadding>
            {job.details.responsibilities.map((r, i) => (
              <ListItem key={i} disableGutters sx={{ alignItems: 'center', py: 0.3 }}>
                <ListItemIcon sx={{ minWidth: 22, display: 'flex', alignItems: 'center' }}>
                  <FiberManualRecordIcon sx={{ fontSize: 7, color: 'primary.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary={r}
                  primaryTypographyProps={{ variant: 'body2', color: 'text.secondary', lineHeight: 1.7 }}
                />
              </ListItem>
            ))}
          </List>
        </Block>

        <Divider sx={{ mb: 3 }} />

        <Block label="Highlights">
          {job.details.highlights.map((h, i) => (
            <Stack key={i} direction="row" spacing={1} alignItems="flex-start" sx={{ mb: 1 }}>
              <EmojiEventsIcon sx={{ fontSize: 16, color: 'primary.main', mt: 0.3, flexShrink: 0 }} />
              <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                {h}
              </Typography>
            </Stack>
          ))}
        </Block>

        <Divider sx={{ mb: 3 }} />

        <Block label="Tech Stack">
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {job.details.techStack.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 500,
                  fontSize: '0.75rem',
                }}
              />
            ))}
          </Stack>
        </Block>
      </Box>
    </Drawer>
  )
}
