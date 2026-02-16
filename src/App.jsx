import Divisor from './components/Divisor/Divisor.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Loading from './components/Loading/Loading.jsx';
import SectionContato from './components/SectionContato/SectionContato.jsx';
import SectionHabilidades from './components/SectionHabilidades/SectionHabilidades.jsx';
import SectionHero from './components/SectionHero/SectionHero.jsx';
import SectionProjetos from './components/SectionProjetos/SectionProjetos.jsx';
import SectionSobre from './components/SectionSobre/SectionSobre.jsx';
import { useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
  <main>
                {isLoading && <Loading onComplete={() => setIsLoading(false)} />}            
                  <Header />
                  <SectionHero />
                  <Divisor />
                  <SectionSobre />
                  <SectionHabilidades />
                  <SectionProjetos />
                  <SectionContato />
                  <Footer />
    </main>
  )
}

export default App
