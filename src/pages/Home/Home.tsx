import React, { useEffect } from 'react'
import './Home.scss'
import useStore from '../../utils/useStore'
import { useObserver } from 'mobx-react-lite'

const Home: React.FC = () => {
    const store = useStore()
    const { home } = store

    useEffect(()=>{
        home.setHome()
    },[home])

    return useObserver(()=>(
        <div className="home">

        </div>
    ))
}

export default Home