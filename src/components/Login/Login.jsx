import React from 'react'
import { useNavigate } from "react-router-dom";
import logoImage from '../../assets/img/logo.png'

const Login = () => {
    let navigate = useNavigate();

    const onSubmit = () => {
        navigate('/logincollect')
    }

    return (
        <div className='login_wrap'>
            <div className="header">
                <img src={logoImage} alt="Logo" />
                <p>틈새시간, 손틈새로 <br />아낄 준비 되셨나요?</p>
            </div>
            <div className="login">
                <input type="text" placeholder='ID' />
                <div>
                    <input type="text" placeholder='Password' />
                    <button></button>
                </div>
            </div>
            <button onClick={() => {onSubmit()}}>로그인</button>
            <ul>
                <li>아이디 찾기</li>/
                <li>비밀번호 찾기</li>
            </ul>
        </div>
    )
}

export default Login