// 1
import {config} from './modules/config'
console.log('Config key: ', config.key)

// 2
import AppService from './modules/app.service'
const service = new AppService('Hello world!')
service.log()

// 3
import './modules/header.component'