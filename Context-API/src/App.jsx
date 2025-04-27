import { useState } from 'react'
import './App.css'
import Counter from './components/Counter.jsx'
import CountDescriptor from './components/CountDescriptor';
import { Context } from '../Context';

function App() {

  const [count , setCount] = useState(0);

  return (
    <div>
      <Context.Provider value={ { countContext: count , setCountContext: setCount} } >
        <Counter />
        <CountDescriptor />
      </Context.Provider>
    </div>
  )

}

export default App;
