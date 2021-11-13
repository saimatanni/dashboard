import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import User from './components/User';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import TableList from './components/TableList';
import Typography from './components/Typography';
import Icons from './components/Icons';
import Map from './components/Map';
import Notifications from './components/Notifications';
import SideNarBar from './components/SideNarBar';

function App() {
  return (
    < >
    <Router>
      {/* <Navbar/> */}
      <SideNarBar/>
    <Routes>
          <Route exact path="/" element={ <Dashboard />}>
           
          </Route>
          <Route exact path="/user" element={ <User/>}>
          
          </Route>
          <Route exact path="/table" element={ <TableList />}/>
          <Route exact path="/typography" element={ <Typography />}/>
          <Route exact path="/icons" element={ <Icons />}/>
          <Route exact path="/map" element={ <Map />}/>
          <Route exact path="/notifications" element={ <Notifications />}/>
          {/* <Route exact path="/navbar" element={ <SideNarBar />}/> */}
        </Routes>
{/* <SideNav/> */}

      {/* <Footer/> */}
    </Router>
     
    </>
  );
}

export default App;
