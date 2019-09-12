import React, { Component } from 'react'
import { Button, Flex, WingBlank, WhiteSpace, InputItem, Toast } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './login.css'

import { login } from "../../api/http";

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            acc: "",
            pwd: "",
            oldacc:"",
            oldpwd:""
        }

    }

    render() {
        return (
            <div id="login">
                <Flex justify="center">
                    <img src={require("../../assets/images/LOGO.png")} className="logo" />
                </Flex>
                <WingBlank size="lg">
                    <InputItem
                        placeholder="请输入手机号"
                        value={this.state.acc}
                        onChange={(val) => { this.setState({ acc: val }) }}
                        clear
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/icon-acc.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        value={this.state.pwd}
                        placeholder="请输入密码"
                        type="password"
                        onChange={(val) => { this.setState({ pwd: val }) }}
                        clear
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/icon-pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <Button className="BtnF60" onClick={this.toLogin.bind(this)}>登录</Button>
                    <Flex justify="between" className="toOther">
                        <Link to="/register">手机快速注册</Link>
                        <Link to="/forget">忘记密码</Link>
                    </Flex>
                </WingBlank>
                <div className="msg">
                    <Flex justify="center" >
                        登录/注册即代表同意《家园房产用户协议》
                </Flex>
                </div>
            </div>
        )
    }

    toLogin() {
        let { acc, pwd,oldacc,oldpwd } = this.state;
        if (!(acc && pwd)) {
            Toast.offline('请填写完整表单', 1);
        }else if(acc == oldacc && pwd == oldpwd){
            Toast.offline('请重新填写表单', 1);
        }else {
            login({acc,pwd})
                .then(data => {
                    if (data === "ok") {
                        this.props.history.replace('/');
                    } else {
                        // console.log(this.props.history)
                        // console.log(this)
                        this.setState({
                            oldacc:acc,
                            oldpwd:pwd
                        })
                        Toast.fail('用户或密码错误', 1);
                    }
                })
        }

    }
}
