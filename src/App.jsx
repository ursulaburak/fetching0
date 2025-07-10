import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Coffee from './components/Coffee/Coffee'

function App() {

  const [list, setList] = useState([])
  useEffect(() => {
    const fv= fetch("https://api.sampleapis.com/coffee/hot")
    console.log(fv)

    },[])

  return (
    <>
    <Coffee
      id={2}
      title="Latte"
      description="lorem"
      ingredients={["Espresso","Ångad mjölk","Karamellsirap"]}
      image="https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
    />
    </>
  );
}

export default App;
