import {Route, Routes} from 'react-router-dom'
import Header from './pages/Header';
import Main from './pages/Main'
import TeamSetting from './pages/TeamSetting';
import ReactModal from 'react-modal';
import MyTeam from './pages/MyTeam';
import ManageMember from './components/ManageMember/ManageMember';
import NoTeam from './pages/NoTeam';
import NewTeam from './pages/NewTeam';
import TeamCheck from './pages/TeamCheck';
import TeamSearch from './pages/TeamSearch';
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/Chart.css'
import Join from './pages/Join';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Edit from './pages/Edit';
import TeamRoom from './pages/TeamRoom'

ReactModal.setAppElement("#root");

function App() {

//   useEffect(() => {
//     axios.get('/hello')
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
// }, []);

  // ** axios로 데이터 전송하기 (백엔드에)
  // axios                       : 비동기적으로 데이터를 요청
  //    .post(url,{보낼데이터})  : 전송할 데이터, url
  //           .then(()=>{})
  //           .catch(()=>{})

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
      <Route path='/Teamcheck/:team_seq' element={<TeamCheck/>}></Route>
      <Route path='/teamsearch' element={<TeamSearch/>}></Route>
      <Route path='/join' element={<Join/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/mypage' element={<MyPage/>}></Route>
      <Route path='/edit' element={<Edit/>}></Route>
      <Route path='/teamroom' element={<TeamRoom/>}></Route>

    </Routes>
   </div>
  );
}

export default App;

