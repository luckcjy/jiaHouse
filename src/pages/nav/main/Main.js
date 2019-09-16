import React, { Component } from 'react'
import { Flex, Carousel, WingBlank, Toast, Grid } from 'antd-mobile';
import { connect } from "react-redux";
import HouseList from "../../../components/houseList/HouseList";

import './main.css'

import { guseeLike } from '../../../api/http'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            bannerData: [{ url: "", hash: "" }],
            imgHeight: "100px",
            pageList: [
                { iconImg: "icon-newH.png", title: "新房", tar: "" },
                { iconImg: "icon-towH.png", title: "二手房", tar: "" },
                { iconImg: "icon-zf.png", title: "租房", tar: "" },
                { iconImg: "icon-sp.png", title: "商品写字楼", tar: "" },
                { iconImg: "icon-sellH.png", title: "卖方", tar: "" },
                { iconImg: "icon-hwH.png", title: "海外房产", tar: "" },
                { iconImg: "icon-price.png", title: "小区房价", tar: "" },
                { iconImg: "icon-wd.png", title: "问答", tar: "" }
            ].map((item, i) => ({
                icon: require("../../../assets/images/" + item.iconImg),
                text: item.title,
            })),
            bkList: [
                { iconImg: "icon-dk.png", title: "我要贷款", tar: "" },
                { iconImg: "icon-computer.png", title: "房贷计算", tar: "" },
                { iconImg: "icon-konw.png", title: "知识", tar: "" },
                { iconImg: "icon-sys.png", title: "扫一扫", tar: "" },
            ].map((item, i) => ({
                icon: require("../../../assets/images/" + item.iconImg),
                text: item.title,
            })),
            likeList: [
                { id: "", imgs: "", point: "", name: "hahah", area: "dfasdf", price: "1999", type: "dsfsd" },

            ],
            city: "定位中"
        }
    }
    componentWillMount() {
        guseeLike()
            .then(data => {
                console.log(data)
                this.setState({
                    likeList: data
                })
            })
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                bannerData: [
                    { url: "images/1.jpg", hash: "" },
                    { url: "images/2.jpg", hash: "" },
                    { url: "images/3.jpg", hash: "" }
                ].map((item) => item.url = require("../../../assets/" + item.url))
            })
        }, 100);
        this.getCity()
    }
    getCity() {
        const self = this
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                    //地图显示当前城市
                    // map.setBounds(citybounds);
                    self.setState({
                        city: cityinfo
                    })
                    console.log(cityinfo)

                }
            } else {
                // document.getElementById('info').innerHTML = result.info;
                console.log(result.info)

            }
        });

    }
    changeHash(tar) {
        // console.log(this.props.h)
        this.props.h.push(tar)
    }
    // componentDidUpdate(){
    //     this.getCity()
    // }
    //添加足迹
    addHistory(obj) {
        this.props.dispatch({
            type: "addArr",
            newObj: obj
        })
        Toast.success('已经浏览', 1);
    }
    render() {
        return (
            <div id="main">
                <Flex className="top" justify="between">
                    <label onClick={this.changeHash.bind(this, '/selectcity')}>{this.state.city}▼</label>
                    <div className='search-div' onClick={this.changeHash.bind(this, '/search')}>
                        <img src={require('../../../assets/images/icon_search.png')} />
                        <label>选好房,上家园</label>
                    </div>
                    <img onClick={this.changeHash.bind(this, '/map')} src={require('../../../assets/images/icon_map.png')} />
                </Flex>
                <Carousel
                    infinite
                    autoplay
                    autoplayInterval="5000"
                    style={{ height: "150px" }}
                >
                    {this.state.bannerData.map((val, i) => (
                        <a
                            key={i}
                            href="#/"
                            style={{ display: 'inline-block', width: '100%' }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', height: "150px", verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <Grid data={this.state.pageList} hasLine={false} activeStyle={false} />

                <div style={{ backgroundColor: "#fff" }}>
                    <p style={{ marginBottom: 0, padding: "12px 0 0" }}> <span style={{ fontSize: "20px", color: "#f60", marginLeft: "6%", fontWeight: "bold" }}>房产全百科</span> <span>专业的买房攻略</span> </p>
                    <Grid data={this.state.bkList} hasLine={false} activeStyle={false} />
                </div>
                {/* <div style={{ backgroundColor: "#fff" }}>
                    <WingBlank>
                        <p style={{ marginLeft: "6%", margin: 0, marginTop: "15px", fontSize: "18px" }}>猜你喜欢</p>
                        {this.state.likeList.map((item, index) => <div key={index} className="guessLike" onClick={this.addHistory.bind(this,item)}>
                            <img src={`http://192.168.43.159:1234${item.imgs}`} alt={item.name} className="houseImg" />
                            <Flex className="houseInf" justify="between">
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.area}</p>
                                    <p>{item.type}&emsp;{item.point}平</p>
                                </div>
                                <span className="housePrice">
                                    {item.price}/平
                                </span>
                            </Flex>

                        </div>
                        )

                        }
                    </WingBlank>

                </div>
             */}
                <HouseList likeList={this.state.likeList} addHistory={this.addHistory.bind(this)}>
                <h2 style={{ marginLeft: "6%", margin: 0, marginTop: "15px", fontSize: "18px" }}>猜你喜欢</h2>
                </HouseList>
            </div>
        )
    }
}
export default connect()(Main)