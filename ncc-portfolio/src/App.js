
import './App.scss';
import Header from './components/Header';
import HeroArea from './components/HeroArea';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroArea />
      <Experiences />
      <Skills />
      <Projects />
      <Certificates />
    </div>
  );
}

export default App;
