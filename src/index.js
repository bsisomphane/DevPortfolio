import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Contact from './componets/Contact';
import Skills from './componets/Skills';
import Second from './componets/Second';
import Header from './componets/Header';

ReactDOM.render(

  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/second' element={<Second/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);