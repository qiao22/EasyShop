import React, { useEffect } from 'react'
import './Special.scss'
import useStore from '../../utils/useStore'
import { useObserver } from 'mobx-react-lite'
import { SpecialItemType } from '../../utils/type'

const Special: React.FC = () => {

    const store = useStore()
    const { special } = store

    useEffect(()=>{
        special.setSpecialList('1','10')
    },[special])

    return useObserver(()=>(
        <div className="special">
            <ul className="s_ul">
                {
                    special.speciallist && special.speciallist.map((item:SpecialItemType,index:number)=>{
                        return (
                            <li className="s_li" key={index}>
                                <img className="s_li_img" src={item.scene_pic_url} alt=""/>
                                <div className="s_li_text">
                                    <p>{item.title}</p>
                                    <p>{item.subtitle}</p>
                                    <span>{item.price_info}元起</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    ))
}

export default Special