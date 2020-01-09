import React from 'react';
import './main.scss';
import RouterView from '../../router/routerview';
import { NavLink } from 'react-router-dom';

interface ItemType {
    path?: any,
    component?: any,
    from?: string,
    to?: any,
    title:string
}

interface PropType {
    routes: ItemType[]
}

const Main: React.FC<PropType> = (props) => {

    const routes = props.routes.filter(item=> item.path)

    return (
        <div className="content">
            <div className="header">
                <div className="title">
                    <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt=""/>
                    <div className="ipt">
                        <span id="first">搜索商品,共<span>1111</span>款好物</span>
                    </div>
                    <button className="blogin">登录</button>
                </div>
            </div>
            <div className="main">
                <RouterView routes={props.routes}></RouterView>
            </div>
            <footer>
                {
                    routes.map((item:ItemType, index) =>{
                        return <NavLink to={item.path} key={index}>{item.title}</NavLink>
                    })
                }
            </footer>
        </div>
        
    )
}

export default Main