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

const Main: React.FC<PropType> = (props:any) => {
    return (
        <div className="main">
            <RouterView routes={props.routes}></RouterView>
            <footer>
                <nav>
                    <NavLink className="tabbar" activeClassName="active" to="/main/home" >
                        <i className={ props.location.pathname === '/main/home' ? 'tabbar_icon active_home':'tabbar_icon home'} />
                        <span className="tabbar_text">主页</span>
                    </NavLink>
                    <NavLink className="tabbar" activeClassName="active" to="/main/special" >
                        <i className={ props.location.pathname === '/main/special' ? 'tabbar_icon active_special':'tabbar_icon special'} />
                        <span className="tabbar_text">专题</span>
                    </NavLink>
                    <NavLink className="tabbar" activeClassName="active" to="/main/type" >
                        <i className={ props.location.pathname === '/main/type' ? 'tabbar_icon active_type':'tabbar_icon type'} />
                        <span className="tabbar_text">分类</span>
                    </NavLink>
                    <NavLink className="tabbar" activeClassName="active" to="/main/cart" >
                        <i className={ props.location.pathname === '/main/cart' ? 'tabbar_icon active_cart':'tabbar_icon cart'} />
                        <span className="tabbar_text">购物车</span>
                    </NavLink>
                    <NavLink className="tabbar" activeClassName="active" to="/main/my" >
                        <i className={ props.location.pathname === '/main/my' ? 'tabbar_icon active_my':'tabbar_icon my'} />
                        <span className="tabbar_text">我的</span>
                    </NavLink>
                </nav>
            </footer>
        </div>
    )
}

export default Main