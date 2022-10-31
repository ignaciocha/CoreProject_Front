import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Join from './pages/Join';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import JoinSuccess from './pages/JoinSuccess';
import Edit from './pages/Edit';
import Main from './pages/Main';
import Header from './pages/Header';
import FilterBox from './components/Filter/FilterBox';
import TeamRoom from './pages/TeamRoom';
import TeamSetting from './pages/TeamSetting';
import KakaoLogin from './pages/KakaoLogin';
import SignUp from './pages/SignUp';


function App() {

  

  return (

   <div>
    <Header/>
    <FilterBox/>
    <TeamRoom/>

    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/teamSetting' element={<TeamSetting/>}></Route>
      <Route path='/join' element={<Join />}></Route>
      <Route path='/login'element={<Login />}></Route>
      <Route path='/mypage' element={<MyPage/>}></Route>
      <Route path='/Edit' element={<Edit/>}></Route>
      <Route path='/joinsuccess' element={<JoinSuccess/>}></Route>
      <Route path='/kakaologin' element={<KakaoLogin/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
   </div>
  );
}

export default App;
