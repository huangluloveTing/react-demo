import React, { Component } from 'react';
import Loading from './LoadingComponent'


export default function AsyncComponent(importComponent) {
    return class extends Component {

        constructor(props) {
            super(props)
            this.state = {
                component : Loading
            }
        }

        componentDidMount() {
            importComponent().then((com) => {
                this.setState({
                    component:com.default
                })
            })
        }

        render() {
            const C = this.state.component
            return <C {...this.props} />
        }
    }
}