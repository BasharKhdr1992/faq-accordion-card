import React from 'react';
import './App.css';
import FAQ from './components/FAQ';
import Appendix from './components/UI/Appendix';

const App = () => {
  return (
    <div className="wrapper" role={'main'}>
      <FAQ />
      <Appendix />
    </div>
  );
};

export default App;
