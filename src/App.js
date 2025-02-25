import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import Viewall from './components/Viewall';
import Delete from './components/Delete';
import SearchStudent from './components/SearchStudent';


import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddStudent/>}/>    
    <Route path='/search' element={<SearchStudent/>}/>    
    <Route path='/delete' element={<Delete/>}/>    
    <Route path='/viewall' element={<AddStudent/>}/>    

   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
