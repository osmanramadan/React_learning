import Header from "./compenents/header";
import Footer from "./compenents/footer";
import Content from "./compenents/content";
import { Container } from "react-bootstrap";
import { person } from "./data";
import { useEffect, useState } from "react";



function App() {
  
 const [data,setData] = useState([])

 useEffect(() => {
  setData(person)
 },[]);
 
 const displayData=()=>{
  setData(person)
 }
 const clearData=()=>{
  setData([])
 }
  return (
    <div className="font color-body">
    <Container  className="py-5">
    <Header data={data}/>
    <Content data={data}/>
    <Footer clear={clearData} display={displayData}/>
    </Container>
    
    </div>
  );
}

export default App;
