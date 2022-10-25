import './styles/App.css';
import Main from './pages/Main';
import MyTeam from './pages/MyTeam';
import {Route, Routes} from 'react-router-dom'
import ManageMember from './components/ManageMember/ManageMember';
import NoTeam from './pages/NoTeam';

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/myteam' element={<MyTeam/>}></Route>
      <Route path='/noteam' element={<NoTeam/>}></Route>
      <Route path='/managemember' element={<ManageMember/>}></Route>
      <Route path='*'></Route>
      <Route path='*'></Route>
    </Routes>
   </div>
  );
}

export default App;

