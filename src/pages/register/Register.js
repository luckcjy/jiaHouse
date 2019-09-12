import React, { Component } from 'react'
import { Button, Flex, WingBlank, Toast, InputItem, Checkbox, NoticeBar, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './register.css'

import { reg, checkCode } from "../../api/http";


const AgreeItem = Checkbox.AgreeItem;
export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            acc: "",
            pwd: "",
            checkNum: "",
            returnCode:"",
            isCheck: false,
            isAgr: false,
            show:"none"
        }
    }



    render() {
        return (
            <div id="register">
                <NoticeBar mode="closable"  style={{display:this.state.show}} icon={<Icon type="check-circle-o" size="xxs" />}>
                   验证码为:{ this.state.returnCode }
                </NoticeBar>
                <WingBlank size="lg">

                    <InputItem
                        placeholder="请输入手机"
                        value={this.state.acc}
                        onChange={(val) => { this.setState({ acc: val }) }}
                        clear
                    />
                    <InputItem
                        placeholder="请输入密码"
                        type="password"
                        value={this.state.pwd}
                        onChange={(val) => { this.setState({ pwd: val }) }}
                        clear
                    />
                    <div className="check">
                        <InputItem
                            placeholder="请输入验证码"
                            value={this.state.checkNum}
                            onChange={(val) => { this.setState({ checkNum: val }) }}
                        />
                        <span style={{ color: "#ccc" }} onClick={this.getCheck.bind(this)}>获取验证码</span>
                    </div>


                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', this.setState({ isAgr: e.target.checked }))}>
                                我已同意  <a><span className="cf60">《用户服务协议》及《隐私权政策》</span></a>
                            </AgreeItem>
                        </Flex.Item>
                    </Flex>
                    <Button className="BtnF60" onClick={this.toReg.bind(this)}>
                        注册
                    </Button>
                    <Link to="/login"><span className="cf60">已有账号</span>  </Link>
                </WingBlank >
            </div>
        )
    }
    getCheck() {
        if(this.state.show =="flex")
            return
        console.log(1111)
        checkCode()
            .then(data => {
                console.log(data)
                this.setState({
                    returnCode:data,
                    show:"flex"
                })
                setTimeout(() => {
                    this.setState({
                        show:"none"
                    })
                }, 5000);
            })
    }
    toReg() {

        let { acc, pwd, isCheck, isAgr,checkNum,returnCode } = this.state
        if(checkNum == returnCode && checkNum){
            isCheck = true
        }else{
            isCheck = false
        }
        this.setState({
            returnCode:""
        })
        if (isCheck && isAgr && acc && pwd) {
            reg({ acc, pwd })
                .then(data => {
                    if (data === "ok") {
                        Toast.success('注册成功', 1);
                        this.props.history.replace('/login');
                    } else {
                        // console.log(this.props.history)
                        // console.log(this)
                        Toast.fail('注册失败', 1);
                    }
                })
            }else if( !(acc && pwd)){
                Toast.offline('请完整填写表单', 1);
            }else if (!isCheck) {
                Toast.offline('验证码错误,请重新获取', 1);
            } else if (!isAgr) {
                Toast.offline('请阅读并同意协议', 1);
            } 
    }
}
