import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Join from './components/Join.js';
import Login from './components/Login.js';
import MyPage from './pages/MyPage.js';
import JoinSuccess from './pages/JoinSuccess';
import Edit from './pages/Edit.js';
import Main from './pages/Main.js';


function App() {
  return (
    <div>
      <Main/>
      <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/join' element={<Join />}></Route>
      <Route path='/login'element={<Login />}></Route>
      <Route path='/mypage' element={<MyPage/>}></Route>
      <Route path='/Edit' element={<Edit/>}></Route>
      <Route path='/joinsuccess' element={<JoinSuccess/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
