import React, { Component } from 'react';
import NaviBar from '../../components/NaviBar'
import {InputItem , Button} from 'antd-mobile'
import './login.scss'
import * as API from '../../api/index'

export default class Login extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loading: false
        }
        this.submitInfo = this.submitInfo.bind(this)
        this.register = this.register.bind(this)
    }

    /** 登录 */
    async submitInfo() {
        let {username , password} = this.state;
        this.setState({ loading: true });
        this.$toast.loading()
        try {
            let info = await API.login(username , password)
            this.$toast.success('登录成功' , () => {
                this.setState({ loading: false });
                this.props.history.replace('/home')
            })
        } catch (error) {
            this.setState({ loading: false });
            this.$toast.fail(error.error)
        }
    }

    // 去注册
    register() {
        console.log('register')
        this.props.history.push('/auth/register')
    }

    render() {
        return (
            <div className='login-page'>
                <NaviBar title='登录' />
                <div className='login-content'>
                    <div className='form-content'>
                        <InputItem placeholder='用户名' onChange={(value) => {this.setState({ username: value });}} clear>用户名</InputItem>
                        <InputItem placeholder='密码' onChange={value => {this.setState({ password: value });}} clear type='password'> 密码 </InputItem>
                    </div>
                    <Button type='primary' className='login-submit' loading={this.state.loading} onClick={this.submitInfo}>登录</Button>
                </div>
                <div className='login-register'>
                    <span className='not-account'> 没有账号？ </span>
                    <Button style={{height: '30px' , lineHeight:'30px' , padding: '0 10px'}} className='register' type='ghost' onClick={this.register}> 去注册 </Button>
                </div>
            </div>
        )
    }
}