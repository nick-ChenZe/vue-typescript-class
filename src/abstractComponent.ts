import Vue, { VNode, Component, CreateElement } from 'vue'

declare type ErrorCallbackHandler = (err: Error, vm: Component, info: string) => void

export default abstract class VueAbstractComponent {
  protected preserveKeysOfLifeCycle: Array<string>
  protected errorCaptured: ErrorCallbackHandler
  constructor(protected el?: HTMLElement | string) {
    this.preserveKeysOfLifeCycle = [
      'beforeCreate',
      'created',
      'beforeMount',
      'mounted',
      'beforeUpdate',
      'updated',
      'activated',
      'deactivated',
      'beforeDestroy',
      'destroyed',
      'errorCaptured'
    ]
  }
  beforeCreate(): void {}
  created(): void {}
  beforeMount(): void {}
  mounted(): void {}
  beforeUpdate(): void {}
  updated(): void {}
  activated(): void {}
  deactivated(): void {}
  beforeDestroy(): void {}
  destroyed(): void {}
  abstract render(h: CreateElement): VNode | Vue
}
