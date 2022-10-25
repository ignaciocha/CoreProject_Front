import './styles/App.css';
// import {Route, Routes} from 'react-router-dom';
import Header from './pages/Header';
import FilterBox from './components/Filter/FilterBox';
import {Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import TeamRoom from './pages/TeamRoom';
import TeamSetting from './pages/TeamSetting';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NewTeam from './pages/NewTeam';
import BubbleChart from '@weknow/react-bubble-chart-d3'
import './styles/Chart.css'

function App() {
  return (
   <div>
    <Header/>
    {/* <FilterBox/> */}
    {/* <TeamRoom/> */}

    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/teamSetting' element={<TeamSetting/>}></Route>
      <Route path='/newTeam' element={<NewTeam/>}></Route>
      <Route path='*'></Route>
      <Route path='*'></Route>
    </Routes>
    
   </div>
  );
}

export default App;
