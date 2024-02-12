import React from 'react'
import { useNavigate } from "react-router-dom";

const Join = () => {
    let navigate = useNavigate();

    const onSubmit = () => {
        navigate('/joincollect')
    }

    return (
        <div className='join_wrap'>
            <h2>회원가입</h2>
            <div className="join">
                <input type="text" placeholder='Name' />
                <div>
                    <input type="text" placeholder='ID' />
                    <button></button>
                </div>
                <input type="password" placeholder='Password' />
                <input type="password" placeholder='Password Confrim' />
            </div>
            <button className='submit' onClick={() => onSubmit()}>회원가입</button>
        </div>
    )
}

export default Join