import Bmob from 'hydrogen-js-sdk'
import config from '../config/config.json'

Bmob.initialize(config['bmob-app-id'] , config['bmob-rest-api-key'])

export default Bmob;