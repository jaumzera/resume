import { header, summary, experience, education, certifications, techByCategory, contact } from '../../data/resume'

const INDIGO = '#4F46E5'
const MUTED = '#555'
const LIGHT = '#888'

const s: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '8pt',
    lineHeight: 1.38,
    color: '#111',
    margin: 0,
    padding: 0,
    WebkitPrintColorAdjust: 'exact',
    printColorAdjust: 'exact',
  },

  // ── Header ──────────────────────────────────────────────
  header: {
    display: 'flex',
    alignItems: 'stretch',
    marginBottom: '9pt',
    gap: 0,
  },

  accentBar: {
    width: '4pt',
    backgroundColor: INDIGO,
    borderRadius: '2pt',
    flexShrink: 0,
    marginRight: '8pt',
  },

  headerText: {
    flex: 1,
    borderBottom: `1pt solid #ddd`,
    paddingBottom: '6pt',
  },

  name: {
    fontSize: '20pt',
    fontWeight: 800,
    letterSpacing: '-0.5pt',
    lineHeight: 1.1,
    margin: '0 0 2pt',
    color: '#0F172A',
  },

  title: {
    fontSize: '9.5pt',
    fontWeight: 600,
    color: INDIGO,
    margin: '0 0 4pt',
  },

  contactLine: {
    fontSize: '7.5pt',
    color: MUTED,
    display: 'flex',
    gap: '10pt',
    flexWrap: 'wrap',
  },

  contactDot: {
    color: '#bbb',
  },

  // ── Summary ─────────────────────────────────────────────
  summary: {
    fontSize: '7.5pt',
    color: '#333',
    lineHeight: 1.55,
    marginBottom: '9pt',
    borderLeft: `2pt solid #e0e0e0`,
    paddingLeft: '6pt',
  },

  // ── Two-column layout ────────────────────────────────────
  row: {
    display: 'flex',
    gap: '14pt',
    alignItems: 'flex-start',
  },

  mainCol: { flex: '1 1 0', minWidth: 0 },
  sideCol: { width: '145pt', flexShrink: 0 },

  // ── Section titles ───────────────────────────────────────
  sectionTitle: {
    fontSize: '7pt',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1pt',
    color: INDIGO,
    borderBottom: `1.5pt solid ${INDIGO}`,
    paddingBottom: '2pt',
    marginBottom: '5pt',
    marginTop: 0,
  },

  // ── Experience entries ───────────────────────────────────
  jobWrap: { marginBottom: '6pt' },

  jobHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: '4pt',
  },

  jobRole: { fontWeight: 700, fontSize: '8.5pt', color: '#0F172A' },
  jobPeriod: { fontSize: '7pt', color: LIGHT, flexShrink: 0 },
  jobMeta: { fontSize: '7.5pt', color: MUTED, marginBottom: '2pt' },
  jobDesc: { fontSize: '7.5pt', color: '#333', lineHeight: 1.45 },

  // ── Side column items ────────────────────────────────────
  eduWrap: { marginBottom: '5pt' },
  eduDegree: { fontWeight: 700, fontSize: '7.5pt', color: '#0F172A' },
  eduInst: { fontSize: '7pt', color: MUTED },
  eduPeriod: { fontSize: '7pt', color: LIGHT },

  certWrap: { marginBottom: '3pt' },
  certTitle: { fontSize: '7.5pt', color: '#222' },
  certYear: { fontSize: '7pt', color: LIGHT },

  techWrap: { marginBottom: '3.5pt' },
  techLabel: { fontWeight: 700, fontSize: '7pt', color: '#333' },
  techList: { fontSize: '7pt', color: MUTED },
}

export default function ResumePrint() {
  return (
    <div style={s.page}>

      {/* ── Header ── */}
      <div style={s.header}>
        <div style={s.accentBar} />
        <div style={s.headerText}>
          <p style={s.name}>{header.name}</p>
          <p style={s.title}>{header.title}</p>
          <div style={s.contactLine}>
            <span>{contact.linkedin.replace('https://', '')}</span>
            <span style={s.contactDot}>·</span>
            <span>{contact.phone}</span>
            <span style={s.contactDot}>·</span>
            <span>{contact.website.replace('http://', '')}</span>
          </div>
        </div>
      </div>

      {/* ── Summary ── */}
      <p style={s.summary}>{summary}</p>

      {/* ── Two columns ── */}
      <div style={s.row}>

        {/* Main: Experience */}
        <div style={s.mainCol}>
          <p style={s.sectionTitle}>Professional Experience</p>
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} style={s.jobWrap}>
              <div style={s.jobHeader}>
                <span style={s.jobRole}>{job.role}</span>
                <span style={s.jobPeriod}>{job.period}</span>
              </div>
              <div style={s.jobMeta}>{job.company} · {job.location}</div>
              <div style={s.jobDesc}>{job.description}</div>
            </div>
          ))}
        </div>

        {/* Side: Education + Certs + Tech */}
        <div style={s.sideCol}>

          <p style={s.sectionTitle}>Education</p>
          {education.map((e) => (
            <div key={e.degree} style={s.eduWrap}>
              <div style={s.eduDegree}>{e.degree}</div>
              <div style={s.eduInst}>{e.institution}</div>
              <div style={s.eduPeriod}>{e.period}</div>
            </div>
          ))}

          <p style={{ ...s.sectionTitle, marginTop: '8pt' }}>Certifications</p>
          {certifications.map((c) => (
            <div key={c.title} style={s.certWrap}>
              <div style={s.certTitle}>{c.title}</div>
              <div style={s.certYear}>{c.issuer} · {c.year}</div>
            </div>
          ))}

          <p style={{ ...s.sectionTitle, marginTop: '8pt' }}>Tech Stack</p>
          {Object.entries(techByCategory).map(([cat, techs]) => (
            <div key={cat} style={s.techWrap}>
              <span style={s.techLabel}>{cat}: </span>
              <span style={s.techList}>{techs.join(', ')}</span>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
