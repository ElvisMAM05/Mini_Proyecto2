import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tienda from '../Pages/Tienda.jsx'

function Routing(){
return(
<Router>
    <Routes>
        <Route path='/nombre' element={<Tienda/>}/>

    </Routes>

</Router>

)
}

export default Routing