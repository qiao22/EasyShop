import React, { useEffect } from 'react'
import './Type.scss'
import useStore from '../../utils/useStore'
import { useObserver } from 'mobx-react-lite'

const Type: React.FC = () => {

    let store = useStore()
    let { type } = store

    useEffect(()=>{
        type.setType()
    }, [type])

    return useObserver(()=>(
        <div className="type">
            <div className="t_top">
                <div className="t_search">
                    <i className="search_icon"></i>
                    <span className="t_placeholder">搜索商品,首页共21876款好物</span>
                </div>
            </div>
            <div className="t_main">
                <div className="t_nav">
                    <div>
                        <ul className="t_nav_ul">
                            {
                                type.typenavlist.map((item:any,index:number) => {
                                    return (
                                        <li className="item" key={index}>
                                            {item.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="t_content"></div>
            </div>
        </div>
    ))
}

export default Type
