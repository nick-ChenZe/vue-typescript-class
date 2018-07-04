import { VNode } from 'vue'
import VueComponent from '../src/component'
import WorldName from './WorldName'
import Scrollable, { IScrollable } from './mixins/scrollable'

interface IHelloWorldData {
  name: string
}

export default class HelloWorldComponent extends VueComponent<IHelloWorldData, {}, IScrollable> {
  protected mixins = [Scrollable]
  constructor() {
    super()
    this.components = [new WorldName()]
    this.dataset.name = 'nick'
  }

  fetchData(): number[] {
    return []
  }

  render(h): VNode {
    return h('div', this.dataset.name)
  }
}
