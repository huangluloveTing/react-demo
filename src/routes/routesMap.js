import AsyncComponent  from '../components/AsyncComponent';
const Register = AsyncComponent(() => import('../pages/auth/register'));
const Login = AsyncComponent(() => import('../pages/auth/login'));
const Home = AsyncComponent( () => import('../pages/Home'))
const EditMenu = AsyncComponent( () => import('../pages/edit/EditMenu'))
const ListPage = AsyncComponent( () => import('../pages/edit/ListPage'))


const routesMap = [
    { path: '/' , component: Home},
    { path: '/home' , component: Home},
    { path: '/list' , component: ListPage },
    { path: '/auth/register', component: Register },
    { path: '/auth/login' , component: Login },
    { path: '/editMenu' , component: EditMenu }
];

export default routesMap;