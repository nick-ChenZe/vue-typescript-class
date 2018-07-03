import Vue, { VNode, Component, CreateElement } from 'vue'
import VueStore from './store'
import VueAbstractComponent from './abstractComponent'

export default class VueComponent<MixinData = {}, MinxinProp = {}, MinxinMethods = {}, MixinWatcher = {}, MinxinLifeHook = {}> extends VueAbstractComponent {
  protected dataset: MixinData
  protected components: Array<VueComponent> = []
  constructor() {
    super()
  }

  render(h): VNode {
    return
  }
}
