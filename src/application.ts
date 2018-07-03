import Vue, { VNode, Component, CreateElement } from 'vue'
import VueAbstractComponent from './abstractComponent'

interface IVueAppConfig {
  /**
   * Suppress all Vue logs and warnings
   */
  silent?: boolean
  /**
   * Define custom merging strategies for options.
   * The merge strategy receives the value of that option defined on the parent and
   * child instances as the first and second arguments, respectively.
   * The context Vue instance is passed as the third argument.
   */
  optionMergeStrategies?: { [key: string]: Function }
  /**
   * Configure whether to allow [vue-devtools](https://github.com/vuejs/vue-devtools) inspection.
   * This option’s default value is `true` in development builds and `false` in production builds.
   * You can set it to `true` to enable inspection for production builds.
   */
  devtools?: boolean
  /**
   * Assign a handler for uncaught errors during component render function and watchers.
   * The handler gets called with the error and the Vue instance.
   *
   * In 2.2.0+, this hook also captures errors in component lifecycle hooks.
   * Also, when this hook is undefined, captured errors will be logged with console.error instead of crashing the app.
   *
   * In 2.4.0+ this hook also captures errors thrown inside Vue custom event handlers.
   *
   * Error tracking services Sentry and Bugsnag provide official integrations using this option.
   */
  errorHandler?: ErrorCallbackHandler
  /**
   * Assign a custom handler for runtime Vue warnings. Note this only works during development and is ignored in production.
   */
  warnHandler?: (msg: string, vm: Component, trace: string) => void
  /**
   * Make Vue ignore custom elements defined outside of Vue (e.g., using the Web Components APIs).
   * Otherwise, it will throw a warning about an Unknown custom element,
   * assuming that you forgot to register a global component or misspelled a * component name.
   */
  ignoredElements?: Array<string | RegExp>
  /**
   * Define custom key alias(es) for v-on.
   */
  keyCodes?: { [key: string]: number | Array<number> }
  /**
   * Set this to `true` to enable component init, compile,
   * render and patch performance tracing in the browser devtool performance/timeline panel.
   * Only works in development mode and in browsers that support the
   * [performance.mark](https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark) API.
   */
  performance?: boolean
  /**
   * Set this to `false` to prevent the production tip on Vue startup.
   */
  productionTip?: boolean
}

enum types {
  function = 'function',
  string = 'string',
  number = 'number'
}

export class VueAppliction extends VueAbstractComponent {
  private m_config: IVueAppConfig
  constructor(el: HTMLElement | string, private component: VueComponent, config: IVueAppConfig = {}) {
    super(el)
    this.m_config = config
    Object.keys(config).forEach(this.assignGlobalConfig)
  }

  private assignGlobalConfig(key): void {
    Vue.config[key] = this.m_config[key]
  }

  render(): Vue {
    const options = {
      el: this.el
    }
    this.preserveKeysOfLifeCycle.forEach(cycleKey => {
      const isFunction = typeof this[cycleKey] === types.function
      if (isFunction) options[cycleKey] = this[cycleKey]
    })
    return new Vue({
      data: {},
      // router,
      // store,
      // mixins,
      // directives,
      // delimiters,
      // comments,
      ...options,
      render: (createElement: Function) => createElement(this.component)
    })
  }
}
