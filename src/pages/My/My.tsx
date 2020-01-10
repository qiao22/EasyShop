import React, { useState } from 'react'
import './My.scss'

let mylist = [
    {
        bgpostion:'my_item_icon u-icon-ulist',
        text:'我的订单'
    },
    {
        bgpostion:'my_item_icon u-icon-upin',
        text:'周六一七拼'
    },
    {
        bgpostion:'my_item_icon u-icon-uaftersale',
        text:'售后服务'
    },
    {
        bgpostion:'my_item_icon u-icon-ulead',
        text:'邀请返利'
    },
    {
        bgpostion:'my_item_icon u-icon-upreemption',
        text:'优先购'
    },
    {
        bgpostion:'my_item_icon u-icon-upoints',
        text:'积分中心'
    },
    {
        bgpostion:'my_item_icon u-icon-umembershipBenefits',
        text:'会员俱乐部'
    },
    {
        bgpostion:'my_item_icon u-icon-uaddress',
        text:'地址管理'
    },
    {
        bgpostion:'my_item_icon u-icon-usecurity',
        text:'账号安全'
    },
    {
        bgpostion:'my_item_icon u-icon-uhelp-kefu',
        text:'帮助与客服'
    },
    {
        bgpostion:'my_item_icon u-icon-ufeedback',
        text:'意见反馈'
    }
]

const My: React.FC = () => {

    const [ listdata ] = useState(mylist)

    return (
        <div className="my">
            <div className="info">
                <img className="avatar" src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt=""/>
                <div className="information">
                    <p>{window.localStorage.getItem('user')}</p>
                    <p>普通用户</p>
                </div>
            </div>
            <div className="my_list">
                <ul>
                    {
                        listdata.map((item:any,index)=>{
                            return (
                                <li key={index}>
                                    <i className={item.bgpostion}></i>
                                    <span className="my_item_text">{item.text}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="outlogin">
                退出登录
            </div>
        </div>
    )
}

export default My