import Vue, { VNode, Component, CreateElement } from 'vue'
import VueAbstractComponent from './abstractComponent'

export class VueComponent<MixinData = {}, MinxinProp = {}, MinxinMethods = {}, MixinWatcher = {}, MinxinLifeHook = {}> extends VueAbstractComponent {
  protected dataset: MixinData
  constructor() {
    super()
  }

  render(h): VNode {
    return
  }
}
