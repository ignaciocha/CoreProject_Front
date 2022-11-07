import React, { useEffect } from 'react'
import { useNavigate , useLocation} from 'react-router-dom';
import {REST_API_KEY, REDIRECT_URI } from '../components/Kakao';






function KakaoLogin() {
    const location = useLocation();
    const navigate = useNavigate();
    const KAKAO_CODE = location.search.split ('=')[1];

    // 토큰을 저장해줌

    const getKakaoToken = () => {
        fetch(`https://kauth.kakao.com/oauth/token`, {
            method: 'POST' ,
            headers: { 'Content-Type' : 'application/x-www-form-urlencoded'},
            body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_url=${REDIRECT_URI}&code=${KAKAO_CODE}`,

        })
        .then(res=>res.json())
        .then(data => {
            if (data.access_token) {
                localStorage.setItem('token', data.access_token);
            } else {
                navigate('/')
            }
        });
    };

    useEffect(()=> {
        if (!location.search) return;
        getKakaoToken(); 
    }, []);

    return <div> KakaoLogin </div>;
}
export default KakaoLogin
