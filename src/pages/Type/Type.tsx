import React, { useEffect } from 'react'
import './Type.scss'
import useStore from '../../utils/useStore'
import { useObserver } from 'mobx-react-lite'

const Type: React.FC = () => {

    let store = useStore()
    let { type } = store

    useEffect(()=>{
        type.setType()
        console.log('生命周期')
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
                                        <li className={index===type.currentindex ? 'item active':'item'} key={index} onClick={()=>type.setCurrentType(index)}>
                                            <span className={ index===type.currentindex ? 'text active':'text' }>{item.name}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="t_content">
                    <div>
                        <div className="t_content_wrap">
                            <div className="banner">
                                <img src={type.currentdata.wap_banner_url} alt=""/>
                                <span>{type.currentdata.front_desc}</span>
                            </div>
                            <div className="list">
                                <ul>
                                    {
                                        type.currentdata.subCategoryList &&　type.currentdata.subCategoryList.map((item:any,index:number)=>{
                                            return (
                                                <li key={index}>
                                                    <img src={item.wap_banner_url} alt=""/>
                                                    <span>{item.name}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
}

export default Type
