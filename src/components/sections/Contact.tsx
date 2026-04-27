import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Section, { SectionTitle } from '../layout/Section'
import { contact } from '../../data/resume'

export default function Contact() {
  const socials = [
    contact.github && { icon: <GitHubIcon />,  label: 'GitHub', href: contact.github },
    contact.email  && { icon: <EmailIcon />,   label: 'Email',  href: `mailto:${contact.email}` },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; href: string }[]

  return (
    <Section id="contact">
      <Box sx={{ maxWidth: 560, mx: 'auto', textAlign: 'center' }}>
        <SectionTitle>Get In Touch</SectionTitle>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, mb: 4, lineHeight: 1.7 }}>
          Feel free to reach out — whether it's about a project, a role, or just a conversation about distributed systems and LLMs.
        </Typography>

        {/* LinkedIn CTA */}
        <Button
          href={contact.linkedin}
          target="_blank"
          rel="noopener"
          variant="contained"
          size="large"
          startIcon={<LinkedInIcon />}
          sx={{
            mb: 4,
            px: 4,
            background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
            boxShadow: 'none',
            '&:hover': {
              background: 'linear-gradient(135deg, #4338CA 0%, #6D28D9 100%)',
              boxShadow: '0 4px 20px rgba(79,70,229,0.35)',
            },
          }}
        >
          Connect on LinkedIn
        </Button>

        {/* Social icons */}
        {socials.length > 0 && (
          <Stack direction="row" justifyContent="center" spacing={1}>
            {socials.map(({ icon, label, href }) => (
              <Tooltip key={label} title={label}>
                <IconButton
                  href={href}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: 'text.secondary',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
                    transition: 'all 0.15s ease',
                  }}
                >
                  {icon}
                </IconButton>
              </Tooltip>
            ))}
          </Stack>
        )}
      </Box>

      <Typography
        variant="caption"
        color="text.disabled"
        display="block"
        textAlign="center"
        sx={{ mt: 8 }}
      >
        João Massan · Software Engineer
      </Typography>
    </Section>
  )
}
