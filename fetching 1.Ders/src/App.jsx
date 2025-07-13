import { useEffect, useState } from 'react'
import './App.css'
import Coffee from './components/Coffee/Coffee'

import { getHotCoffees, getIcedCoffees } from "./services/coffee-service"

function App() {
  const [list, setList] = useState([]);
  const [temperature, setTemperature] = useState("hot")

  
  useEffect(() => {
    if (temperature === "iced") getIcedCoffees().then((res) => setList(res))
    if (temperature === "hot") getHotCoffees().then((res) => setList(res))
    },  [temperature]);

  return (
    <>
    <button
      onClick={()=>{
        if(temperature==="iced") setTemperature("hot");
        else setTemperature("iced");
      }}
    >
      Toggle Temperature
    </button>
      {list.map((item) => {
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
