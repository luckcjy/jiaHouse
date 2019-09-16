import React, { Component } from 'react'
import { connect } from "react-redux";

import  HouseList  from "../../../components/houseList/HouseList";

class History extends Component {
    
    render() {
      var  show = this.props.historyArr.length==0?"block":"none"
        return (
            <div style={{backgroundColor:"#fff",height:"100%",width:"100%" }}> 
            <HouseList likeList={this.props.historyArr} addHistory={null}>
                <h2 style={{ marginLeft: "6%", margin: 0, paddingTop: "15px", fontSize: "18px" }}>你的足迹</h2>
                <p style={{ display:show }}> 你还浏览过住房信息哟~! </p>
            </HouseList>
            </div>
        )
    }
}

export default connect(state => ({
    historyArr: state.historyArr
  }))(History)