import Navigator from './components/Navigator';
import Projects from './pages/Projects';
import About from './pages/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigator />
      <Projects />
      <About />
    </div>
  );
}

export default App;
