import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';
import Join from './components/Join/Join';
import Pricing from './components/Pricing/Pricing';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Reasons />
          <Pricing />
          <Testimonials />
          <Join />
          <Footer />
    </div>
  );
}

export default App;
