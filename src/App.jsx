import Divisor from './components/Divisor/Divisor.jsx';
import Header from './components/Header/Header.jsx';
import SectionHabilidades from './components/SectionHabilidades/SectionHabilidades.jsx';
import SectionHero from './components/SectionHero/SectionHero.jsx';
import SectionProjetos from './components/SectionProjetos/SectionProjetos.jsx';
import SectionSobre from './components/SectionSobre/SectionSobre.jsx';

function App() {

  return (
    <main>
      <Header />
      <SectionHero />
      < Divisor />
      <SectionSobre />
      <SectionHabilidades />
      <SectionProjetos />
    </main>
  )
}

export default App
