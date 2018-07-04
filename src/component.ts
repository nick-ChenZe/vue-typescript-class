import Vue, { VNode, Component, CreateElement } from 'vue'
import VueStore from './store'
import VueAbstractComponent from './abstractComponent'

export default class VueComponent<IData = {}, IProp = {}, IMixin = {}> extends VueAbstractComponent implements A {
  protected dataset: IData & IMixin
  protected props: IProp & IMixin
  protected components: Array<VueComponent> = []
  protected mixins: Array<VueMixins> = []
  constructor() {
    super()
  }

  render(h): VNode {
    var a = this.fetchData()
    return
  }
}
