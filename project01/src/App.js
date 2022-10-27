import {Route, Routes} from 'react-router-dom'
import Header from './pages/Header';
import FilterBox from './components/Filter/FilterBox';
import Main from './pages/Main'
import TeamRoom from './pages/TeamRoom';
import TeamSetting from './pages/TeamSetting';
import ReactModal from 'react-modal';
import MyTeam from './pages/MyTeam';
import ManageMember from './components/ManageMember/ManageMember';
import NoTeam from './pages/NoTeam';
import NewTeam from './pages/NewTeam';
import BubbleChart from '@weknow/react-bubble-chart-d3'
import TeamCheck from './pages/TeamCheck';
import TeamSearch from './pages/TeamSearch';
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/Chart.css'
import Join from './pages/Join';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import axios from 'axios'

ReactModal.setAppElement('#root');

function App() {
  // const [hello, setHello] = useState('');

  useEffect(() => {
    axios.get('/hello')
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}, []);

  return (
   <div>
    <Header/>

    {/* {hello} */}
    
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/teamsetting' element={<TeamSetting/>}></Route>
      <Route path='/myteam' element={<MyTeam/>}></Route>
      <Route path='/noteam' element={<NoTeam/>}></Route>
      <Route path='/managemember' element={<ManageMember/>}></Route>
      <Route path='/newteam' element={<NewTeam/>}></Route>
      <Route path='/TeamCheck' element={<TeamCheck/>}></Route>
      <Route path='/teamsearch' element={<TeamSearch/>}></Route>
      <Route path='/join' element={<Join/>}></Route>
      <Route path='/login' element={<Login/>}></Route>

    </Routes>
   </div>
  );
}



export default App;

