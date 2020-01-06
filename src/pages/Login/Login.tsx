import React from 'react'
import './Login.scss'

const Login: React.FC = () => {
    return (
        <div className="login">
            <div className="logo">
                <img src={require('../../assets/img/login_logo.png')} alt=""/>
            </div>
            <div className="form">
                <ul>
                    <li><input type="user" placeholder="请输入手机号" /></li>
                    <li><input type="password" placeholder="请输入密码" /></li>
                    <li><input type="submit" value="登陆" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Login

