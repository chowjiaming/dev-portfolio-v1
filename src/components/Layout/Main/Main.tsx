import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Projects from '../../Pages/Projects/Projects';
import Contact from '../../Pages/Contact/Contact';
import './Main.css';

const Main: React.FC = () => {
  return (
    <main className="main">
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
