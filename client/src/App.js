import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Service from './Components/Service';
import Jobs from './Components/Jobs';
import Training from './Components/Training';
import JobDetails from './Components/JobDetails';
import InternshipDetails from './Components/InternshipDetails';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Website from './Components/Website';
import Android from './Components/Android';
import Policy from './Components/Policy';
import Terms from './Components/Terms';
import Digital from './Components/Digital';
import Aiml from './Components/Aiml';
import Seo from './Components/Seo';
import Pricing from './Components/Pricing';
import Design from './Components/Design';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/jobs' element={<Jobs/>}></Route>
          <Route path='/training' element={<Training/>}></Route>
          <Route path='/getjobs/:id' element={<JobDetails/>}></Route>
          <Route path='internshipdetails/:id' element={<InternshipDetails/>}></Route>
          <Route path='/about-us' element={<About/>}></Route>
          <Route path='/team' element={<Team/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/website' element={<Website/>}></Route>
          <Route path='/android' element={<Android/>}></Route>
          <Route path='/privacyPolicy' element={<Policy/>}></Route>
          <Route path='/termsAndConditions' element={<Terms/>}></Route>
          <Route path='/digital' element={<Digital/>}></Route>
          <Route path='/aiml' element={<Aiml/>}></Route>
          <Route path='/seo' element={<Seo/>}></Route>
          <Route path='/pricing' element={<Pricing/>}></Route>
          <Route path='/design' element={<Design/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
