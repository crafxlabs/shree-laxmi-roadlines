import { useState } from 'react';
import './App.css';
import Preloader from './Preloader';


function App() {


  const [loading, setLoading] = useState(true);


  setTimeout(() => {
    setLoading(false)
  }, 7000)

  if (loading) {
    return <Preloader />
  }

  return (
    <div className="app">
      <h1>App</h1>
    </div>
  );
}

export default App;
