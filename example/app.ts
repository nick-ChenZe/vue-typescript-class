import VueApplication, { IVueAppConfig } from '../src/application'
import HelloWorldComponent from './HelloWorld'
import VueRouter from 'vue-router'
import VueStore from '../src/store'
import { IState } from './vuex/states'
import constants from './vuex/constants'

const config: IVueAppConfig = {}
config.productionTip = false

const app = new VueApplication('#app', new HelloWorldComponent(), config)
app.append(new VueStore<IState, typeof constants>())
app.append(new VueRouter())
app.render()
