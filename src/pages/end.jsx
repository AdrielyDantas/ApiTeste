import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';

function EndPage(){
const navigate = useNavigate();
const {idDoPerson} = useParams();
const [episodios, setEpisodios] = useState([]);

async function GetPersons(){
    try {
        const retorno = await axios.get(
          `https://rickandmortyapi.com/api/character/${idDoPerson}`
        );
        setPersonagem(retorno.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      GetPersons();
    }, [idDoPerson]);






}





export default EndPage;