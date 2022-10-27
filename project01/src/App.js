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
import './styles/Chart.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [hello, setHello] = useState('')

  useEffect(()=>{
    axios.get('/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error))
  },[]);

  return (
   <div>
    
    백엔드에서 가져온 데이터 입니다 : {hello}


    <Header/>
    {/* <FilterBox/> */}
    {/* <TeamRoom/> */}

    {/* <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/teamSetting' element={<TeamSetting/>}></Route>
      <Route path='/newTeam' element={<NewTeam/>}></Route>
      <Route path='*'></Route>
      <Route path='*'></Route>
    </Routes> */}
    
     </div>
  );
}

export default App;
