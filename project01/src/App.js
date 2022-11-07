import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './pages/Header';
import FilterBox from './components/Filter/FilterBox';
import Main from './pages/Main';
import TeamRoom from './pages/TeamRoom';
import TeamSetting from './pages/TeamSetting';
import ReactModal from 'react-modal';
import MyTeam from './pages/MyTeam';
import ManageMember from './components/ManageMember/ManageMember';
import NoTeam from './pages/NoTeam';
import NewTeam from './pages/NewTeam';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import TeamCheck from './pages/TeamCheck';
import TeamSearch from './pages/TeamSearch';
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/Chart.css';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Edit from './pages/Edit';
import KakaoLogin from './pages/KakaoLogin';
import SignUp from './pages/SignUp';
import JoinSuccess from './pages/JoinSuccess';

ReactModal.setAppElement('#root');

function App() {
  return (
    <div>
      <Header />
      {/* <FilterBox/> */}
      <TeamRoom />

      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="/teamsetting" element={<TeamSetting />}></Route>
        <Route path="/myteam" element={<MyTeam />}></Route>
        <Route path="/noteam" element={<NoTeam />}></Route>
        <Route path="/managemember" element={<ManageMember />}></Route>
        <Route path="/newteam" element={<NewTeam />}></Route>
        <Route path="/TeamCheck" element={<TeamCheck />}></Route>
        <Route path="/teamsearch" element={<TeamSearch />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/joinsuccess" element={<JoinSuccess />}></Route>
        <Route path="/kakaologin" element={<KakaoLogin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
