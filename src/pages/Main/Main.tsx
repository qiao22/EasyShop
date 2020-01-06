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
        <div className="main">
            <RouterView routes={props.routes}></RouterView>
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