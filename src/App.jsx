import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#1e293b',
          color: '#f8fafc',
          border: '1px solid #334155'
        }
      }} />
      <Navigation />
      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-dark-950 py-8 border-t border-gray-800">
        <div className="container-custom text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ashish Shabu. 
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App; 