
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Join from "./Components/Join/Join";
import "./App.css"
import Chat from "./Components/Chat/Chat";




function App() {
  
  return (
   <>
   <Router>
    <Routes>
    <Route exact path="/" Component={Join} />
    <Route exact path="/chat" Component={Chat} />
   
    
    </Routes>
   </Router>
             
   </>
  );
}

export default App;
