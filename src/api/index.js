
import bmob from './bmob'

export const query_menu = bmob.Query('menu_dash')
export const login = (usernname , password) => bmob.User.login(usernname , password)
export const logout = () => bmob.User.logout()
export const register = (username , email , password) => bmob.User.register({username , password , email})
export const queryInfo = () =>  bmob.User.current()
export const queryAllMenus = () => query_menu.find()