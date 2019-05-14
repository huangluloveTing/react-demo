import React , { Component } from 'react'
import PropTypes from 'prop-types';
import './BKNavi.scss'


export default class Navi extends Component {

    render() {
        return (
            <div className='navi_container'> 
                <div onClick={() => {if (this.props.leftAction) {this.props.leftAction()}}}>{this.props.leftIcon }</div>
                <div onClick={() =>{ if (this.props.titleAction) {this.props.titleAction()} }}> {this.props.title} </div>
                <div onClick={() => {if (this.props.rightAction) {this.props.rightAction()}}}>{this.props.rightIcon}</div>
            </div>
        )
    }
}

Navi.propTypes = {
    naviClassName: PropTypes.object,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    title: PropTypes.node,
    leftAction: PropTypes.func,
    rightAction: PropTypes.func,
    titleAction: PropTypes.func
}