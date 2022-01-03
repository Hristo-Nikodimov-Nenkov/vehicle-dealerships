import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

function App() {
   return <>
      <Header/>
      <Routes>
         <Route index element={<Home/>}/>
         <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
   </>
}

export default App;
