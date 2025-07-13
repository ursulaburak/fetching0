import { useEffect, useState } from 'react'
import './App.css'
import Coffee from './components/Coffee/Coffee'

import { getHotCoffees, getIcedCoffees } from "./services/coffee-service"

function App() {
  const [temperature, setTemperature] = useState("hot");
  const [list, setList] = useState([]);
  const [status, setStatus] = useState("idle");
  
  useEffect(() => {
    const fetcher = temperature==="hot" ? getHotCoffees : getIcedCoffees;
    setStatus("loading");
    fetcher().then((res) => {
      setList(res);
      setStatus("idle")
    });
  }, [temperature]);
 

  // const list = useAsyncState(getIcedCoffees,[])

  return (
    <>
    <button
    onClick={() => {
      if(temperature==="hot") setTemperature("iced")
      if(temperature==="hot") setTemperature("hot")
    }}
    >Toggle Temperature</button>
    {status==="loading" && "Loading..."}
    {status==="loading" && list.map((item) => {
      
        return ( 
         <Coffee
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          ingredients={Array.isArray(item.ingredients) ? item.ingredients : []}
          image={item.image}    
      />   
      );
    })}
  </>
);
}

export default App
