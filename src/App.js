import Header from './componets/Header';
import Second from './componets/Second';
import Section from './componets/Section';
import Skills from './componets/Skills';
import { BrowserRouter as Router} from "react-router-dom";
import Projects from './componets/Projects';

function App() {
  return (
    <div className="App">
     <Section/>
    <Second/>
    <Skills />
    <Projects />
    </div>
  );
}

export default App;