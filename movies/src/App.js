import { Container } from "react-bootstrap";
import Navbarbs from "./compenents/navbar";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cardlist from "./compenents/cardlist";
import Carddetails from "./compenents/carddetails";
import { Routes, Route } from 'react-router-dom'


function App() {
const [movies, setMovies] = useState([]);
const [pagecount,setPagecount]=useState(0)

// get data from api
const fetchData = async () => {
        try {
        const url ='https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en'
        const response = await axios.get(url);
        setMovies(response.data.results)
        setPagecount(response.data.total_pages >=500?500:response.data.total_pages)
        } catch (error) {
        return null 
        }};
      
useEffect(() => {
    fetchData();
},[]);

// get current page
const getPage = async (page) => {
    const res = await
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en&page=${page}`)
    setMovies(res.data.results)
    setPagecount(res.data.total_pages >=500?500:res.data.total_pages)
  }

// to search in api
const search = async (word) => {
    if (word === "") {
    fetchData();
    } else {
    const res =
    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=en`)
    setMovies(res.data.results)
    setPagecount(res.data.total_pages >=500 ? 500 :res.data.total_pages)
  }
  }
  
return (
    <div>
    <Navbarbs filter={search}/>
    <Container>
          <Routes>
            <Route path="/" element={<Cardlist data={movies} pagecount={pagecount} getpage={getPage}/>}/>
            <Route path="*" element={<Cardlist data={movies} pagecount={pagecount} getpage={getPage}/>}/>
            <Route path="/movie/:id" element={<Carddetails/>} />
          </Routes>
    </Container>
    </div>
  );
}

export default App;
