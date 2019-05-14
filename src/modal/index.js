import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'
import './Modal.scss'
let modal = null


class ModalContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            message: '',
            title:'',
            close:() => {},
            sure: () => {},
            showModal: false
        }
    }

    currentModal() {
        return (
            <div>
                {this.state.showModal &&
                    <div className='modal-class' onClick={() => {}}>
                        <div className='modal-container'>
                            <h1> {this.state.message} </h1>
                        </div>
                    </div>
                }
            </div>
        )
    }

    cancelAction() {
        if (this.state.close) {
            this.state.close()
        }
    }

    sureAction() { 
        if (this.state.sure) {
            this.state.sure()
        }
    }

    showAlert(title , message , closeCb , sureCb) {
        this.setState({ 
            showModal: true , 
            title : title, 
            close: closeCb,
            sure:sureCb,
            message: message || '提示' });
    }

    closeAlert() {
        this.setState({ showModal: false , message: alert || '提示' });
    }

    render() {
        return (
            <div>
                {this.currentModal()}
            </div>
        )
    }
}

const createModal = () => {
    let el = document.createElement('div')
    el.setAttribute('id' , 'modal-root');
    document.body.appendChild(el)
    let ref = React.createRef()
    ReactDOM.render(<ModalContainer ref={ref}/> , el)
    return {
        showAlert : () => {
            ref.current.showAlert()
        },
        closeAlert : () => {
            ref.current.closeAlert()
        }
    }
}

let root = createModal()

export default modal = {
    alert : () => {
        root.showAlert()
    },
    close: () => {
        root.closeAlert()
    }
}