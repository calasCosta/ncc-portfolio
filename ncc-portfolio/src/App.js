
import './App.scss';
import Header from './components/Header';
import HeroArea from './components/HeroArea';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroArea />
      <Experiences />
      <Projects />
      <Certificates />
    </div>
  );
}

export default App;
