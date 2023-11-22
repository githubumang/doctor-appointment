import './App.css';
import { useState, useEffect } from 'react';
import { Header } from './component/header/Header';
import { FirstSection } from './component/home/section1/FirstSection';
import { SecondSection } from './component/home/section2/SecondSection';
import { doctors as data} from './asset/doctor';
import axios from 'axios';
import { About } from './component/about/About';
import { Contact } from './component/contact/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [doctor, setDoctor] = useState("");
  const [doctors, setDoctors] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://doctor-appointment-backend-5bpp.onrender.com/doctor');
        const data = response.data;
        setDoctors(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>

    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<FirstSection setDoctor={setDoctor}/> }/>
        <Route path='/Home' element={<FirstSection setDoctor={setDoctor}/>}/>
        <Route path='/Home/*' element={<SecondSection code={doctor} doctors={doctors} setDoctors={setDoctors}/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/doctor-appointment' element={<FirstSection setDoctor={setDoctor}/> }/>
        <Route path='/doctor-appointment/*' element={<SecondSection code={doctor} doctors={doctors} setDoctors={setDoctors}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
