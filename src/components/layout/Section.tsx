import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'
import { useInView } from '../../hooks/useInView'

interface SectionProps {
  id: string
  children: React.ReactNode
  sx?: SxProps<Theme>
}

export default function Section({ id, children, sx }: SectionProps) {
  const { ref, inView } = useInView()

  return (
    <Box
      component="section"
      id={id}
      ref={ref}
      sx={{
        py: { xs: 7, md: 11 },
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.65s ease, transform 0.65s ease',
        ...sx,
      }}
    >
      <Container maxWidth="lg">
        {children}
      </Container>
    </Box>
  )
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="h4"
      component="h2"
      gutterBottom
      sx={{
        mb: 5,
        position: 'relative',
        '&::after': {
          content: '""',
          display: 'block',
          width: 44,
          height: 4,
          bgcolor: 'primary.main',
          borderRadius: 2,
          mt: 1,
        },
      }}
    >
      {children}
    </Typography>
  )
}
