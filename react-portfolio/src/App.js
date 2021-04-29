import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
  <div>
    <Nav />
    <main>
    <About />
    <Resume />
    <ContactForm />
    </main>
  </div>
  );
  }

export default App;
