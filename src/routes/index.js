import React, { Component } from 'react';
import { BrowserRouter as Router , Switch , Route , withRouter } from 'react-router-dom'
import RoutesMap from './routesMap'
import NotFund from '../components/NotFund'
import * as API from '../api'

@withRouter
class Routes extends Component {

    componentDidMount() {
        let { history , location } = this.props
        // 监听 路径，未登录，去登录页面
        this.unlisten = history.listen((location) => {
            this.notLoginToLogin(history ,location)
        })
        // 首次加载时，未登录时去登录
        this.notLoginToLogin(history , location)
    }

    // 未登录时，只能去注册页面和登录页面
    notLoginToLogin(history , location) {
        let info = API.queryInfo()
        if (!info && !(location.pathname == '/auth/login' || location.pathname == '/auth/register')) {
            this.$toast.info('未登录，请登录...' , () => {
                history.replace('/auth/login');
            })
        }
    }

    componentWillUnmount() {
        this.unlisten()
    }

    // 路由映射
    mapRoutes() {
        return RoutesMap.map((route , index) => {
            return (
                <Route path={route.path} key={index + ''} exact component={route.component} />
            )
        })
    }

    render() {
        return (
            <Switch>
                {this.mapRoutes()}
                <Route path='*' component={NotFund} />
            </Switch>
        )
    }
}
 
class App extends Component {
    render() {
        return (
            <Router>
                <Routes />
            </Router>
        )
    }
}

export default App;