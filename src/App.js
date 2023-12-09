
import './App.css';
import { Imagecom } from './Components/Imagecom/Imagecom';
import { Signup } from './Components/Siginup/Signup';
import { Signin } from './Components/Signin/Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
   <div className='appMain-container'>
    <div className='container1'>
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<Signin/>}/>
    <Route path='signup'element={<Signup/>}/>
    <Route path='signin'element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
   </div>

 
      <div className='container2'><Imagecom/></div></div>
       
   </>

  );
}

export default App;
