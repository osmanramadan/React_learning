import { items } from "./data";
import NavScrollExample from "./compenents/navbar";
import Header from "./compenents/header";
import Category from "./compenents/category"
import { Container } from "react-bootstrap";
import Carditem from "./compenents/itemslist";
import {useState} from "react";

function App() {
const  [data,setData]=useState(items)


const handleCategoryChange =(cat) => {
const filteddata = cat==='الكل' ?items:items.filter((item) => item.category === cat)
  setData(filteddata)
  
};

const search=(word)=>{
  const filteredFoodItems = items.filter(item =>
    item.title.toLowerCase().includes(word.toLowerCase())
  );
  setData(filteredFoodItems)
}

  return (
    <div>
    <NavScrollExample filter={search}/>
    <Container>
    <Header />
    <Category data={data}  change={handleCategoryChange}/>
    <Carditem items={data} />
    </Container>
    </div>
  );
}

export default App;
