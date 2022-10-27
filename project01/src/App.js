import Header from './pages/Header';
import FilterBox from './components/Filter/FilterBox';
import {Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import TeamRoom from './pages/TeamRoom';
import TeamSetting from './pages/TeamSetting';
import ReactModal from 'react-modal';
import MyTeam from './pages/MyTeam';
import ManageMember from './components/ManageMember/ManageMember';
import NoTeam from './pages/NoTeam';
import NewTeam from './pages/NewTeam';
import BubbleChart from '@weknow/react-bubble-chart-d3'
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/Chart.css'
ReactModal.setAppElement('#root');

function App() {
  return (
   <div>
    <Header/>
    {/* <FilterBox/> */}
    {/* <TeamRoom/> */}

    
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/teamsetting' element={<TeamSetting/>}></Route>
      <Route path='/myteam' element={<MyTeam/>}></Route>
      <Route path='/noteam' element={<NoTeam/>}></Route>
      <Route path='/managemember' element={<ManageMember/>}></Route>
      <Route path='/newteam' element={<NewTeam/>}></Route>
      <Route path='*'></Route>
      <Route path='*'></Route>
    </Routes>
   </div>
  );
}



export default App;

