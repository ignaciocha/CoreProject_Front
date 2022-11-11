import { useEffect, useState } from 'react';
import logo from '../assets/img/gameus_logo_width.svg';
import '../styles/Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillBellFill } from 'react-icons/io';
import Notifications from './Modal/Notifications';

const Header = ({ isLogin, setIsLogin }) => {
	// const dispatch = useDispatch();
	//const navigate = useNavigate();
	// const token = useSelector(state => state.Auth.token);

	const navigate = useNavigate();

	const onLogout = () => {
		localStorage.removeItem('user_id');
		setIsLogin(false);
		navigate('/');
	};

	const goToMyTeam = () => {
		if (isLogin) {
			navigate('/myteam');
		} else {
			alert('로그인을 해주세요');
			navigate('/login');
		}
	};

	const goToNewTeam = () => {
		if (isLogin) {
			navigate('/newteam');
		} else {
			alert('로그인을 해주세요');
			navigate('/login');
		}
	};

	// useEffect(() => {
	//   if (jwtUtils.isAuth(token)) {
	//     setIsLogin(true);
	//   } else {
	//     setIsLogin(false);
	//   }
	// }, [token]);
	// // 비동기로 처리!
	// const logout = async () => {
	//   await dispatch(setToken(""));
	//   alert("로그아웃 되었습니다😎");
	//   navigate("/");
	// };
	// const logout()
	//   localStorage.removeItem();
	// };

	return (
		<div className="headerStyle">
			<div className="leftStyle">
				<Link to="./">
					<img
						src={logo}
						alt="이미지를 불러올 수 없습니다."
						className="logoStyle"
					></img>
				</Link>
				<Link className="textLink" to="/teamsearch">
					<nav className="topStyle">팀찾기</nav>
				</Link>
				<nav className="topStyle" onClick={goToNewTeam}>
					팀만들기
				</nav>
				<nav className="topStyle" onClick={goToMyTeam}>
					내팀보기
				</nav>
			</div>
			{isLogin ? (
				<div className="rightStyle">
					<nav className="loginStyle" onClick={onLogout}>
						로그아웃
					</nav>

					<Link className="text-link">
						<nav className="loginStyle">
							<Notifications />
						</nav>
					</Link>
				</div>
			) : (
				<div className="rightStyle">
					<Link className="textLink" to="/signup">
						<nav className="loginStyle">회원가입</nav>
					</Link>
					<Link className="textLink" to="/login">
						<nav className="loginStyle">로그인</nav>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Header;
