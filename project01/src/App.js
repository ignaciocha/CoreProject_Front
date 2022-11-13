import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Main from './pages/Main';
import TeamSetting from './pages/TeamSetting';
import ReactModal from 'react-modal';
import MyTeam from './pages/MyTeam';
// import ManageMember from './components/ManageMember/ManageMember';
import NoTeam from './pages/NoTeam';
import NewTeam from './pages/NewTeam';
import TeamCheck from './pages/TeamCheck';
import TeamSearch from './pages/TeamSearch';
import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/Chart.css';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Edit from './pages/Edit';
import TeamRoom from './pages/TeamRoom';
import KakaoLogin from './pages/KakaoLogin';
import SignUp from './pages/SignUp';
import JoinSuccess from './pages/JoinSuccess';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Profile from './pages/Profile';

ReactModal.setAppElement('#root');

function App() {
	const [isLogin, setIsLogin] = useState(false);
	useEffect(() => {
		if (localStorage.getItem('user_id') !== null) {
			setIsLogin(true);
		}
	}, []);

	useEffect(() => {
		if (localStorage.getItem('user_id') !== null) {
		  setIsLogin(true);
		}
	  }, []);

	return (
		<div>
			<header>
				<Header isLogin={isLogin} setIsLogin={setIsLogin} />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route
						path="/signup"
						element={<SignUp setIsLogin={setIsLogin} />}
					></Route>
					<Route
						path="/teamsetting/:team_seq"
						element={<TeamSetting />}
					></Route>
					<Route path="/myteam" element={<MyTeam />}></Route>
					<Route path="/noteam" element={<NoTeam />}></Route>
					<Route path="/newteam" element={<NewTeam />}></Route>
					<Route path="/teamroom/:team_seq" element={<TeamRoom />}></Route>
					<Route
						path="/teamsetting/:team_seq/view"
						element={<TeamSetting />}
					></Route>
					<Route path="/" element={<Main />}></Route>
					<Route path="/Teamcheck/:team_seq" element={<TeamCheck />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/teamsearch" element={<TeamSearch />}></Route>
					<Route
						path="/login"
						element={<Login setIsLogin={setIsLogin} />}
					></Route>
					<Route path="/mypage" element={<MyPage />}></Route>
					<Route path="/edit" element={<Edit />}></Route>
					<Route path="/joinsuccess" element={<JoinSuccess />}></Route>
					<Route path="/kakaologin" element={<KakaoLogin />}></Route>
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
