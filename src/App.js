import './App.css';
import Navbar from './components/Navbar';
import Contactform from './components/Contactform';
//  import About from './components/About';
import React, {useState} from "react"
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
  
//   Route,

//   Routes
// } from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light')
  
  const[alert,setalert]=useState(null)
  const showalert= (messege,type)=>{
    setalert({
           msg:messege,
           type:type
    })
    setTimeout(() => {
      showalert(null)
    }, 5000);
  }
  let toggleMode = ()=>{
        if(mode==='light')
        {
          setMode('dark');
          document.body.style.backgroundColor='gray'
          showalert("Dark mode enabled","success")
          document.title='Text Editor-Drak Mode'
          // setTimeout(() => {
          //   document.title='Text Editor Install Now'
          // }, 2000);
          // setTimeout(() => {
          //   document.title='Earn Mony With Text Editor'
          // }, 1500);
          // setTimeout(() => {
          //   document.title='Risk Download'
          // }, 2000);
        }
        else{
          setMode('light');
          document.body.style.backgroundColor='white'
          showalert("light mode enabled","success")
          document.title='Text Editor-Light Mode'
          // setTimeout(() => {
          //   document.title='Text Editor Install Now'
          // }, 2000);
          // setTimeout(() => {
          //   document.title='Earn Mony With Text Editor'
          // }, 1500);
          // setTimeout(() => {
          //   document.title='Risk Download'
          // }, 2000);
            }
      }
  return (
    <>
    {/* <Router> */}
      
    <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container  my-10">
    
    <Contactform showalert={showalert} title="Enter Text below" mode={mode} />
    {/* <Routes>
     <Route exact path='/' element={ }></Route>
     <Route exact path='/about' element={<About></About>}></Route>

    </Routes> */}
    </div>  
    
    {/* </Router> */}
   
   
    
     
            
          
         
        
     
        
    </>
  );
}

export default App;
