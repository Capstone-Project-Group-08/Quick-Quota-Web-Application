import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Signin from './Compenent/Assets/SigninForm/Signin';
import Login from './Compenent/Login Form/Login';
import Home from './Compenent/Home page/Home';
import Offerings from './Compenent/Offerings/Offerings';
import Funzone from './Compenent/Fun Zone/Funzone';
import Journey from './Compenent/Journey/Journey';
import Getintouch from './Compenent/Get In Touch/Getintouch';
import Photography from './Compenent/Fun Zone/Photography/Photography';
import Cooking from './Compenent/Fun Zone/Cooking/Cooking';
import Music from './Compenent/Fun Zone/Music/Music';
import Sport from './Compenent/Fun Zone/Sport/Sport';
import Gardening from './Compenent/Fun Zone/Gardening/Gardening';
import Science from './Compenent/Fun Zone/Science/Science';
import Crafting from './Compenent/Fun Zone/Crafting/Crafting';
import Reading from './Compenent/Fun Zone/Reading/Reading';
import ForgotPassword from './Compenent/Login Form/ForgotPassword';
import Exploration from './Compenent/Fun Zone/Exploration/Exploration';
import Feedback from './Compenent/Get In Touch/Feedback';
import Profile from './Compenent/Login Form/Profile';
import Message1 from './Compenent/Login Form/Message1';
import Message2 from './Compenent/Login Form/Message2';
import Message3 from './Compenent/Login Form/Message3';
import FinalResult from './Compenent/Login Form/FinalResult';
import Analyze from './Compenent/Login Form/Analyze';





function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element ={<Home/>}></Route>
          <Route path = "/Home" element ={<Home/>}></Route>
          <Route path = "/Offerings" element ={<Offerings/>}></Route>
          <Route path = "/Fun Zone" element ={<Funzone/>}></Route>
          <Route path = "/Journey" element ={<Journey/>}></Route>
          <Route path = "/Get In Touch" element ={<Getintouch/>}></Route>
          <Route path = "/Sign In" element ={<Signin/>}></Route>
          <Route path = "/Log In" element ={<Login/>}></Route>
          <Route path = "/Forgot password" element ={<ForgotPassword/>}></Route>
          <Route path = "/Cooking" element ={<Cooking/>}></Route>
          <Route path = "/Photograpy" element ={<Photography/>}></Route>
          <Route path = "/Music" element ={<Music/>}></Route>
          <Route path = "/Sport" element ={<Sport/>}></Route>
          <Route path = "/Gardening" element ={<Gardening/>}></Route>
          <Route path = "/Science" element ={<Science/>}></Route>
          <Route path = "/Crafting" element ={<Crafting/>}></Route>
          <Route path = "/Reading" element ={<Reading/>}></Route>
          <Route path = "/Exploration" element ={<Exploration/>}></Route>
          <Route path = "/Add to Feedback" element ={<Feedback/>}></Route>
          <Route path = "/Profile" element ={<Profile/>}></Route>
          <Route path="/Message1" element={<Message1 />}></Route>
          <Route path="/Message2" element={<Message2 />}></Route>
          <Route path="/Message3" element={<Message3 />}></Route>
          <Route path="/FinalResult" element={<FinalResult />}></Route>
          <Route path="/Analyze" element={<Analyze/>}></Route>


        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;