import React, { Component } from 'react'
import { Flex, WingBlank } from 'antd-mobile';
import { ReactDOM } from "react-dom";
import './HouseList.css'

export default class HouseList extends Component {

    render() {
        console.log(this.props, 111)
        return (
            <div style={{ backgroundColor: "#fff",width:"100%" }}>
                <WingBlank>
                    {this.props.children}
                    {this.props.likeList.map((item, index) => <div key={index} className="guessLike" onClick={this.props.addHistory ? this.props.addHistory.bind(this, item) : null}>
                        <img src={`http://192.168.1.104:1234${item.imgs}`} alt={item.name} className="houseImg" />
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

        )
    }
}
