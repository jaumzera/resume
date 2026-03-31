import GlobalStyles from '@mui/material/GlobalStyles'
import { ColorModeProvider } from './contexts/ColorModeContext'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import TechStack from './components/sections/TechStack'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import ResumePrint from './components/print/ResumePrint'

const printStyles = {
  '@media screen': {
    '.print-only': { display: 'none !important' },
  },
  '@media print': {
    '.screen-only': { display: 'none !important' },
    '.print-only': { display: 'block !important' },
    '@page': { size: 'A4', margin: '12mm' },
  },
}

export default function App() {
  return (
    <ColorModeProvider>
      <GlobalStyles styles={printStyles} />
      <div className="screen-only">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Certifications />
        <Contact />
      </div>
      <div className="print-only">
        <ResumePrint />
      </div>
    </ColorModeProvider>
  )
}
