import './styles/App.css';
import Main from './pages/Main';
import MyTeam from './pages/MyTeam';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/myteam' element={<MyTeam/>}></Route>
      <Route path='*'></Route>
      <Route path='*'></Route>
    </Routes>
   </div>
  );
}

export default App;

