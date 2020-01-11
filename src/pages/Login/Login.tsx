import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.scss'
import useStore from '../../utils/useStore'
import { useObserver } from 'mobx-react-lite'

const Login: React.FC = () => {

    const [ mobile, setMobile ] = useState("15323807318")
    const [ password, setPassword ] = useState("123456")
    const history = useHistory()
    let store = useStore()
    let { user } = store

    const loginFn = async () => {
        let res:any = await user.userLogin({mobile, password})
        if(res.errno === 0) {
            history.push("/main/home")
        }
    }

    return useObserver(() => (
        <div className="login">
            <div className="logo">
                <img src={require('../../assets/img/login_logo.png')} alt=""/>
            </div>
            <div className="form">
                <ul>
                    <li><input type="user" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="请输入手机号" /></li>
                    <li><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="请输入密码" /></li>
                    <li><input type="submit" value="登陆" onClick={loginFn} /></li>
                </ul>
            </div>
        </div>
    ))
}

export default Login
