import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'antd-mobile';
import './my.css'


const Item = List.Item;

export default class My extends Component {
    constructor() {
        super()
        this.state = {
            listArr: [
                [
                    { url: "icon-jf.png", title: "我的积分" },
                    { url: "icon-dy.png", title: "我的订阅" },
                    { url: "icon-lx.png", title: "微聊联系人" }
                ],
                [
                    { url: "icon-computer.png", title: "房贷计算器" },
                    { url: "icon-myH.png", title: "我的房子" },
                ],
                [
                    { url: "icon-kf.png", title: "我的看房记录" },
                    { url: "icon-myQ.png", title: "我的问答" },
                ],
                [
                    { url: "icon-set2.png", title: "设置" },
                    { url: "icon-yj.png", title: "意见反馈" },
                ]
            ]


        }
    }
    render() {
        return (
            <div id="my">
                <div className="header">

                    <div className="userInf">
                        <img className="userImg" src={require('../../../assets/images/LOGO-TOP.png')} alt="头像" />
                        <div>
                            <p><Link to="/login">  登录</Link>/<Link to="/register">注册</Link></p>
                            <p>可以与经纪人发起聊天</p>
                        </div>
                        <img className="setImg" style={{ width: "30px" }} src={require('../../../assets/images/icon-set.png')} alt="设置" />
                    </div>
                    <div className="aboutMoney">
                        <div>
                            <p>0</p>
                            <p> <img src={require("../../../assets/images/icon-qb.png")} className="topicon" alt="钱包"/> 钱包</p>
                        </div>
                        <div>
                            <p>0</p>

                            <p> <img src={require("../../../assets/images/icon-yh.png")} className="topicon" alt="优惠"/> 优惠</p>
                        </div>
                        <div>
                            <p>0</p>

                            <p> <img src={require("../../../assets/images/icon-jf2.png")} className="topicon" alt="积分"/> 积分</p>
                        </div>
                    </div>
                </div>

                <div className="content">
                    {
                        this.state.listArr.map((item, i) =>
                            <List className="my-list">
                                {
                                    item.map((val, k) =>
                                        <Item extra="" arrow="horizontal" thumb={require('../../../assets/images/' + val.url)}>{val.title}</Item>
                                    )
                                }

                            </List>
                        )
                    }
                    {/* <Item extra="" arrow="horizontal">我的订阅</Item>
                    <Item extra="" arrow="horizontal">微聊联系人</Item>
                    <List className="my-list">
                        <Item extra="" arrow="horizontal">房贷计算器</Item>
                        <Item extra="" arrow="horizontal">我的房子</Item>
                    </List>
                    <List className="my-list">
                        <Item extra="" arrow="horizontal">我的看房记录</Item>
                        <Item extra="" arrow="horizontal">我的问答</Item>
                    </List>
                    <List className="my-list">
                        <Item extra="" arrow="horizontal">设置</Item>
                        <Item extra="" arrow="horizontal">意见反馈</Item>
                    </List> */}
                </div>
            </div>
        )
    }
}
