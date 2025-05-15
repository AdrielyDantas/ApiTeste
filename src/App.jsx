import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import React from "react";





function App(){
const [personagens, setPersonagens] = React.useState([]);
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


async function Personagens(){
  try{
  const retorno = await axios.get(`https://rickandmortyapi.com/api/character`)
  console.log(retorno.data.results);

  setPersonagens(retorno.data.results)
  } catch(error){
console.log(error)
  }
}

 React.useEffect(() => {
   Personagens();
 }, []);


return (
  <div style= {{
    // display: "grid",
    // gridTemplateColumns: '350px 350px',
    // rowGap: 50,
    // margin: 100,

  }}> 
  
  <Carousel responsive={responsive}>
    
  

    {personagens?.map((person) => (
    
 
      <div>
       
        <img src={person.image}/>
        <br/>
        Nome: {person.name}
       <br/>
    
        Tipo: {person.type}
        <br/>
        Espécie: {person.species} 
        <br/>
      
      </div>
    ))}
    </Carousel>
  </div>

)
}




export default App;