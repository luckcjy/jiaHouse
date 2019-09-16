import React, { Component } from 'react'

export default class Chat extends Component {
    render() {
        return (
            <div style={{ height:"100%" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
               <img src={require('../../../assets/images/chatImg.PNG')} alt="chat"/>

                </div>
            </div>
        )
    }
}
