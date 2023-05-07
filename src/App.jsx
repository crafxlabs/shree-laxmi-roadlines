import { useState } from 'react';
import './App.css';
import Preloader from './Preloader';
import Header from './Header';


function App() {


  const [loading, setLoading] = useState(true);


  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (loading) {
    return <Preloader />
  }

  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
