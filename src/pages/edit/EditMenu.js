import React, { Component } from 'react';
import NaviBar from '../../components/NaviBar'
import {InputItem , Button , Picker , List, Checkbox , Modal} from 'antd-mobile'
import * as API from '../../api'
import './editMenu.scss'

const units = [
    { value: '份' ,  label:(<div className='pick-item'> 份 </div>)},
    { value: '两' ,  label:(<div className='pick-item'> 两 </div>)},
]

export default class EditMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name:'',
            unit: '',
            choose: [],
            items:[],
            showModal: true
        }
        this.commitInfo = this.commitInfo.bind(this)
        this.commitForm = this.commitForm.bind(this)
    }

    async commitInfo() {
        try {
            console.log(this.state)
        } catch (error) {
            console.log(error)
        }
    }

    // 获取可选单位数量
    getChooseUnits(unit) {
        if (unit == '份') {
            return [{value:'大份' , index: 2} , {value:'中份' , index: 1} , {value:'小份' , index: 0}]
        }
        return [{value:'一两' , index: 0} , {value:'二两' , index: 1} , {value:'三两' , index: 2}]
    }

    // 定价金额
    commitForm(event) {
        event.preventDefault()
    }

    // 可选规格进行排序
    chooseSpecial(value) {
        let have = this.state.choose.some( item => item.value == value.value)
        var choose = Object.assign([],this.state.choose)
        if (have) {
            choose = choose.filter( item => item.value != value.value)
            this.setState({ choose: choose });
        } else {
            choose.push(value)
             var s_choose = choose.sort((item1 , item2) => item1.index - item2.index)
            this.setState({ choose: s_choose });
        }
    }

    // 添加菜名 和 价格
    addMenuItems() {

    }

    // 编辑选项
    editItem(title, placeholder) {
        return (
            <div className='edit-item'><span>{title}</span><InputItem placeholder={placeholder} clear></InputItem></div>
        )
    }

    // 菜名编辑
    showMenuEdit(menu) {
        return (
            <Modal visible={this.state.showModal}
                transparent
                className='edit-modal'
                title={menu ? '编辑菜名' : '新增菜名'}
                footer={[{text:'提交' , onPress:() => {this.setState({ showModal: !this.state.showModal });} , style: {fontSize:'20px' , color: 'red'} }]}
                >
                <div className='edit-content'>
                    {this.editItem('菜名' , '请输入菜名')}
                </div>
                <section>
                    <span>价格</span>
                </section>
            </Modal>
        )
    }

    render() {
        return (
            <div className='edit-page'> 
                <NaviBar title={'编辑菜单'} />
                <div className='edit-content'>
                    <InputItem placeholder='菜名'  clear onChange={(value) => {this.setState({ name: value });}}> 菜名 </InputItem>
                    <Picker
                        extra='选择单位'
                        value={this.state.unit}
                        data={units}
                        cols={1}
                        onChange={(value) => {
                            this.setState({ unit: value ,choose : []});
                        }}>
                        <List.Item className='under-line' arrow='horizontal'> 单位 </List.Item>
                    </Picker>
                    {/* 显示规格选择 */}
                    { this.state.unit.length > 0 &&
                        <div className='check-container'> 
                            <List.Item > 可选规格 </List.Item> 
                            <div className='check-items'>
                                {
                                    this.getChooseUnits(this.state.unit).map((item , index) => {
                                        const selected = this.state.choose.some(i_value => i_value.value == item.value)
                                        return (
                                            <Checkbox.CheckboxItem  checked={selected} key={index+ ''} onChange={() => {this.chooseSpecial(item)}}>{item.value}</Checkbox.CheckboxItem>
                                        )
                                    })
                                }
                            </div>   
                        </div>
                    }
                    { this.state.unit.length > 0 && this.state.choose.length > 0 &&
                        <div className='menu-container'> 
                            <div className='add-menu' onClick={() => {}}> <span> 添加菜名 </span> </div>  
                        </div>
                    }
                    {this.showMenuEdit()}
                </div>
                <Button type='primary' style={{margin:'30px 10px' }} onClick={this.commitInfo}> 提交 </Button>
            </div>
        )
    }
}