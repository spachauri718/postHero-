 import './global.css';
 import {Routes ,Route } from "react-router-dom"

 
 const App = () => {
  return (
    <Routes>
     <Route path= "/sign-in" element={SignUpPage} />
    </Routes>
  )
}


export default App;