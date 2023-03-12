import Header from './components/Header';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import './App.css';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <AboutMe />
      <Services />
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
