import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Fleet from './pages/Fleet';
import Hero from './pages/Hero';
import Mision from './pages/Mision';
import Service from './pages/Service';
import Vision from './pages/Vision';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Mision />
      <Service />
      <Fleet />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
