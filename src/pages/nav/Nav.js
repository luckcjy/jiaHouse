import React, { Component } from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import Chat from './chat/Chat';
import History from './history/History';
import Main from './main/Main';
import My from './my/My';
import { TabBar, Flex } from 'antd-mobile';

import './style/nav.css'


export default class Nav extends Component {

    constructor() {
        super();
        this.state = {
            navList: [
                { title: "首页", iconS: require("../../assets/images/icon-index.png"), iconN: require("../../assets/images/icon-index-2.png") },
                { title: "咨询", iconS: require("../../assets/images/icon-chat.png"), iconN: require("../../assets/images/icon-chat-2.png")},
                { title: "足迹", iconS: require("../../assets/images/icon-history.png"), iconN: require("../../assets/images/icon-history-2.png")},
                { title: "我的", iconS: require("../../assets/images/icon-acc.png"), iconN: require("../../assets/images/icon-acc-2.png") }
            ],
            selectedTab: '首页',
        }
    }
    //获取对应组件
    getRender(tar) {
        switch (tar) {
            case 0:
                return <Main h={this.props.history} />
            case 1:
                return <Chat />
            case 2:
                return <History />
            case 3:
                return <My />
            default:
                break;
        }
    }
    render() {
        return (
            <div id="index">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#f60"
                    barTintColor="white"
                >
                    {
                        this.state.navList.map((item, index) =>
                            <TabBar.Item
                                title={item.title}
                                key={item.title}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${item.iconN}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${item.iconS}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selected={this.state.selectedTab === item.title}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: item.title,
                                    });
                                }}
                                data-seed={item.index}
                            >
                                {this.getRender(index)}
                            </TabBar.Item>

                        )}

                </TabBar>
            </div>
        )
    }
}

