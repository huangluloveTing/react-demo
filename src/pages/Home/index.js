import React, { Component } from 'react';
import Navi from '../../components/NaviBar'
import './index.scss'
import Modal from '../../modal/index'


const projects = ['点餐' , '菜单' , '评价' , '订单记录' ,'送餐记录' , '意见建议' , '添加菜单']

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.tapItemAction = this.tapItemAction.bind(this);
    }

    renderItem() {
        const items = projects.map((item , index) => {
            return <div key={index+''} onClick={() => {this.tapItemAction(index)}}>{home_item(item)}</div>
        })
        return items
    }

    tapItemAction(index) {
        if(index == 6) {
            this.toEditMenu()
        }
        if(index == 0) {
            this.toOrderFood()
        }
        if(index == 1) {
            this.toMenu()
        }
        if(index == 2) {
            this.toComment()
        }
    }

    // 去点餐
    toOrderFood() {
        this.props.history.push('/list')
    }
    // 去菜单
    toMenu() {
        Modal.alert()
    }
    // 去评价
    toComment() {
        Modal.close()
    }
    // 去订单记录
    toOrderRecord() {

    }
    // 去送餐记录
    toDeliveryList() {

    }

    // 去编辑菜谱
    toEditMenu() {
        this.props.history.push('/editMenu')
    }

    render() {
        return (
            <div className='home-page'>
                <Navi title='点餐系统' />
                <div className='home-content'>
                    {this.renderItem()}
                </div>
            </div>
        )
    }
}

const home_item = (item , index) => {
    return (
        <div key={index+ ''} className='item'>
            <span>{item}</span>
        </div>
    )
}
