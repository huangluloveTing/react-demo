import React, { Component } from 'react'
import Navi from './BKNavi'
import './NaviBar.scss'
import { withRouter } from 'react-router-dom'

@withRouter
class NaviBar extends Component {

    constructor(props) {
        super(props)
        this.state ={
            showLeft:true
        }
    }

    componentDidMount() {
        console.log(this.props)
        if (this.props.location.pathname == '/auth/login' || this.props.location.pathname == '/home'  || this.props.location.pathname == '/') {
            this.setState({showLeft:false})
        }
    }

    render() {
        return (
            <div>
                <Navi leftIcon={ this.state.showLeft ? <i className='icon iconfont icon-dingbutubiaofanhui navi'></i> : null} 
                    title={<span className='navi'>{ this.props.title}</span>} 
                    leftAction={() => {this.props.history.goBack()}}/>
            </div>
        )
    }
}
export default NaviBar;