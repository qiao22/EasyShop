import React from 'react'
import './Home.scss'
import Swiper from '../../components/swiper'
const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="header">
                <div className="swiper">
                    {/* 轮播图 */}
                    <Swiper></Swiper>
                </div>  
            </div>
            <div className="pinpai">
                <p>品牌制造商直供</p>
                <div className="ppbox">
                    <div className="one">
                        <img src="https://yanxuan.nosdn.127.net/99ee57835be425bc1574af4943e70b09.png?quality=75&type=webp&imageView&thumbnail=250x0" alt=""/>
                    </div>
                    <div className="two">
                        <img src="https://yanxuan.nosdn.127.net/dcdac102f30d93861bf11f3d7d7f7f9f.png?quality=75&type=webp&imageView&thumbnail=250x0" alt=""/>
                    </div>
                    <div className="three">
                        <img src="https://yanxuan.nosdn.127.net/25a7d421e4809eb3f31a7b0a2288f290.png?quality=75&type=webp&imageView&thumbnail=250x0" alt=""/>
                    </div>
                    <div className="four">
                        <img src="https://yanxuan.nosdn.127.net/431aecb56bb31a6b10a6ad07099ee7c8.jpg?imageView&thumbnail=345y191.66666666666669&quality=95" alt=""/>
                    </div>
                </div>
            </div>
            <div className="newp">
                <p>新品首发</p>
                <dl className="dlone">
                    <dt></dt>
                    <dd>
                        <p>蔓越莓曲奇<span>200克</span></p>
                        <span>￥36</span>
                    </dd>
                </dl>
                <dl className="dtwo">
                    <dt></dt>
                    <dd>
                        <p>蔓越莓曲奇<span>200克</span></p>
                        <span>￥36</span>
                    </dd>
                </dl>
                <dl className="dthree">
                    <dt></dt>
                    <dd>
                        <p>蔓越莓曲奇<span>200克</span></p>
                        <span>￥36</span>
                    </dd>
                </dl>
                <dl className="dfour">
                    <dt></dt>
                    <dd>
                        <p>蔓越莓曲奇<span>200克</span></p>
                        <span>￥36</span>
                    </dd>
                </dl>
            </div>
        </div>
    )
}

export default Home