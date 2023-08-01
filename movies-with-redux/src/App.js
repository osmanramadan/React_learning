import { Container } from "react-bootstrap";
import Navbarbs from "./compenents/navbar";
import Cardlist from "./compenents/cardlist";
import Carddetails from "./compenents/carddetails";
import { Routes, Route } from 'react-router-dom'


function App() {

  
return (
    <div>
    <Navbarbs/>
    <Container>
          <Routes>
            <Route path="/" element={<Cardlist />}/>
            <Route path="*" element={<Cardlist/>}/>
            <Route path="/movie/:id" element={<Carddetails/>} />
          </Routes>
    </Container>
    </div>
  );
}

export default App;
