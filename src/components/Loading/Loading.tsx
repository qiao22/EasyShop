import React from 'react'
import './Loading.scss'
import useStore from '../../utils/useStore'


const Loading:React.FC = () => {
    let store = useStore()
    let { app } = store

    return (
        <div className={ app.loadingflag ? "loading action":"loading"}>
            <img src={require('../../assets/img/loading.jpg')} alt=""/>
        </div>
    )
}

export default Loading