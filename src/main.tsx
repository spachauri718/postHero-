
import ReactDOM  from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    //this means now the BrowserRouter is going to control the rounting of whole application 
        <App />
    </BrowserRouter>
)