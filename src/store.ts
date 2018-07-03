import Vuex, { CommitOptions, DispatchOptions } from 'vuex'

export default class VueStore<IState, ICommiTActionName = {}, IDispatchActionName = {}> {
  private state: IState
  private m_store: any
  constructor() {
    this.m_store = new Vuex.Store({})
  }

  commit<IPayload>(actionName: ICommiTActionName, payload: IPayload, option: CommitOptions): void {
    this.m_store.commit(actionName, payload, option)
  }

  dispatch<IPayload, T>(actionName: IDispatchActionName, payload: IPayload, option: DispatchOptions): Promise<T> {
    return this.dispatch(actionName, payload, option)
  }
}
