import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsSearch } from "react-icons/bs";

import { Pagination, Stack, Typography } from "@mui/material";

function FirstPage() {
  const navigate = useNavigate();
  const [personagens, setPersonagens] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  async function GetPersons() {
    try {
      const retorno = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      setPersonagens(retorno.data.results);
      setTotalPages(retorno.data.info.pages);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetPersons();
  }, [page]);

  const handlePageChange = (event, value) => {
    console.log("pagina selecionada", value);
    setPage(value);
  };

  return (
    <div
      style={{
        // backgroundColor: "#E0FFFF ", // #e3f2fd 	AFEEEE
        minHeight: "100vh",
        padding: "0",
      }}
    >
      <>
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <h1 style={{ fontSize: "30px", color: '#4682B4' }}>Personagens de Rick and Morty</h1>
        </div>

     

        <Carousel responsive={responsive}>
          {personagens.map((persons) => {
            return (
              <div
                key={persons.id}
                style={{
                  padding: "20px",
                  textAlign: "center",
                  borderRadius: "12px",
                  margin: "20px",
                  minHeight: "200px",
                }}
              >
                <img
                  src={persons.image}
                  alt={persons.name}
                  style={{ width: "250px", borderRadius: "10px" }}
                />
                <br />
                <Typography
                  variant="subtitle1"
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  {persons.name}
                  <BsSearch
                    size={18}
                    color="#1976d2"
                    onClick={() => navigate(`/sobre/${persons.id}`)}
                    style={{ cursor: "pointer" }}
                  />
                </Typography>
              </div>
            );
          })}
        </Carousel>

        <Stack spacing={2} alignItems="center" mt={4}>
          <Typography>Página atual: {page}</Typography>
          <Pagination
          size="medium"
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="info"
            showFirstButton
  showLastButton
  shape="rounded"

  
          />
        </Stack>
      </>
    </div>
  );
}

export default FirstPage;
