import React, { Component } from 'react';
import ReactDOM from 'react-dom'


export default class Modal extends Component {

    constructor(props) {
        super(props)
        this.el = document.createElement('div')
        this.el.setAttribute('id' , 'modal')
    }

    componentDidMount() {
        document.body.appendChild(this.el)
    }

    componentWillUnmount() {
        document.body.removeChild(this.el)
    }

    render() {
        let children = this.props.children
        console.log(children)
        return ReactDOM.createPortal(
            children,
            this.el
        )
    }

}