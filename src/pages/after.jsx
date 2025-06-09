import axios from 'axios';  
import { useEffect, useState } from 'react';    
import { useNavigate, useParams } from 'react-router';
import { Tooltip} from '@mui/material';
import {  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';


function AfterPage(){
    const navigate = useNavigate();
    const {idDoPerson} = useParams();

    const [episode, setEpisode] = useState({})
    const [personagem, setPersonagem] = useState({
        name: '',
        image:'',
        episode: [],
    });
    const [eps, setEps] = useState({});
    const [page, setPage] = useState(1);
    const [abrirdialog, setAbrirDialog] = useState(false);
    // const [selectedPerson, setSelectedPerson] = useState(null);

    
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
      

        async function  GetEpisode(linkdoep){
          try{
            const retorno = await axios.get(linkdoep);
            setEpisode(retorno.data);
            setAbrirDialog(true);
          }catch(e){
            console.log(e);
          }
        }
        const handleClose = () => {
          setAbrirDialog(false);
        };

// console.log(eps)

return (
  <div
    style={{
      backgroundColor: '#E0FFFF',
      minHeight: '100vh',
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <h1 style={{ textAlign: 'center' }}>Detalhes do personagem</h1>
    <h3>{personagem.name}</h3>
    <img
      src={personagem.image}
      alt={personagem.name}
      style={{ borderRadius: '10px', marginBottom: '20px' }}
    />

    <Button
      onClick={() => navigate('/')}
      variant="contained"
      color="primary"
      style={{
        marginTop: '20px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#1976d2',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
        }}
    >
      Voltar pra First
    </Button>

    <div style={{ maxWidth: '800px', width: '100%' }}>
      <h4 style={{ textAlign: 'center' }}>Episódios</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        { Array.isArray(personagem.episode) && 
        personagem.episode.map((ep, index) => (
          <li
            key={index}
            style={{
              background: '#fff',
              marginBottom: '10px',
              padding: '10px 15px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
         <span style={{ wordBreak: 'break-word' }}>Episódio {ep.split('/').pop()}</span>
            <Tooltip title="Ver detalhes do episódio">
              <Button
                onClick={() => GetEpisode(ep)}
                style={{
                  marginTop: '10px',
    padding: '10px 20px',
    fontSize: '14px',
    backgroundColor: '#ffffff',
    color: '#1976d2',
    border: '1px solid #1976d2',
    borderRadius: '8px',
    cursor: 'pointer',
  
                }}

              >
                Ver detalhes
              </Button>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>

    <Dialog
      open={abrirdialog}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Detalhes do Episódio</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Nome: {episode.name} <br />
          Data de Lançamento: {episode.air_date} <br />
          Episódio: {episode.episode}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  </div>
);
}

export default AfterPage;


