import { VNode } from 'vue'
import VueComponent from '../src/component'
import WorldName from './WorldName'

interface IHelloWorldData {
  name: string
}

export default class HelloWorldComponent extends VueComponent<IHelloWorldData> {
  constructor() {
    super()
    this.components = [new WorldName()]
    this.dataset.name = 'nick'
  }

  render(h): VNode {
    return h('div', this.dataset.name)
  }
}
