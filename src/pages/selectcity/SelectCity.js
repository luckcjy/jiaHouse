import React, { Component } from 'react'
import BScroll from 'better-scroll'

import city from '../../json/city.json'
import "./SelectCity.css"

export default class SelectCity extends Component {
    constructor() {
        super();
        // this.state={
        //     xValue:""
        // }
    }
    componentDidMount() {
        this.scroll = new BScroll('#city', {
            click: true
        })
    }
    toTar(el) {
        this.scroll.scrollToElement("#" + el, 500)
    }
    //初始按压值
    getStartX(ev) {
        // console.log(ev)
        if (ev.touches.length == 1) {
            //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
             this.startX = ev.touches[0].clientX; // 记录开始位置
            //  this.setState({
            //     xValue: ev.touches[0].clientX
            //  })
            // console.log(this.startX)
        }
    }
    levePage(ev) {
        // console.log(this.startX)

        // ev.preventDefault();
        if (Math.abs(ev.touches[0].clientX - this.startX) > 150) {
            // console.log(Math.abs(ev.touches[0].clientX ) )
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <div id="city" style={{ height: "100%", overflow: "scroll" }} onTouchStart={ this.getStartX.bind(this) } onTouchMove={ this.levePage.bind(this) }>
                <ul className="content">

                    <h2>热门城市</h2>
                    {
                        city.hotCity.map(item => <p key={item}>
                            {item}
                        </p>)
                    }
                    {
                        city.allCity.map((v, i) => <div id={v.code} key={v.code}>
                            <h2>{v.code} </h2>
                            {
                                v.cityList.map((vv, ii) => <p key={ii}>
                                    {vv}
                                </p>
                                )
                            }
                        </div>)
                    }
                </ul>
                <div style={{ position: "fixed", width: "12px", right: "5px", top: "100px" }}>
                    {city.allCity.map(v => <div style={{ padding: "2px 0", fontSize: "12px" }} onClick={this.toTar.bind(this, v.code)}>
                        {v.code}
                    </div>)

                    }
                </div>
            </div>
        )
    }
}
