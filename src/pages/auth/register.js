
import React, { Component } from 'react';
import { Checkbox , InputItem , Button  , Toast} from 'antd-mobile'
import NaviBar from '../../components/NaviBar'
import './register.scss'
import * as API from '../../api'


export default class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username:'',
            email: '583699255@qq.com',
            password: ''
        }
        this.submitInfo = this.submitInfo.bind(this)
        console.log(this)
    }

    async submitInfo() {
        this.$toast.loading()
        console.log(this.state)
        let { username , email , password} = this.state
        try {
            let info = await API.register(username , email , password)
            this.$toast.success('ok')
            this.props.history.replace('/auth/login')
        } catch (error) {
            console.log(error)
            this.$toast.fail(error.error)
        } 
    }

    render() {
        return (
            <div className='res-container'> 
                <NaviBar title={ '注册' }/>
                <div className='form-container'>
                    <InputItem placeholder='输入用户名' value={this.state.username} onChange={(value) => {
                        this.setState({ username: value });
                    }}> 用户名 </InputItem>
                    <InputItem placeholder='输入邮箱' type='' onChange={(value) => {
                        this.setState({ email: value });
                    }}> 邮箱 </InputItem>
                    <InputItem placeholder='输入密码' onChange={(value) => {
                        this.setState({ password: value });
                    }} type='password'> 密码 </InputItem>
                </div>
                <Button style={{margin: '10px'}} type='primary' value='提交' onClick={this.submitInfo}> 提交 </Button>
            </div>
        )
    }
}