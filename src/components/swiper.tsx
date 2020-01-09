import React, { Component } from 'react';
import './swiper.scss'
import { Carousel, WingBlank } from 'antd-mobile'

class swiper extends Component {
    state= {
        data: ['1', '2', '3'],
        imgHeight: 100,
    }
    componentDidMount(){
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
    render() {
        return (
            <WingBlank>
                <Carousel
                autoplay={false}
                infinite
                >
                {this.state.data.map(val => (
                    <a
                    key={val}
                    href=" #"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={`https://yanxuan.nosdn.127.net/25a7d421e4809eb3f31a7b0a2288f290.png?quality=75&type=webp&imageView&thumbnail=250x0`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default swiper;