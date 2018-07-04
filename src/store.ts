import Vuex, { CommitOptions, DispatchOptions, Commit } from 'vuex'

enum Action {
  ADD,
  DELETE
}

interface PAYLOAD {
  ADD: { name: string }
  DELETE: { name: string }
}

type foo<T extends number, P> = { [S in T]: (arg1: { commit: Commit }, arg2: P[S]) => void }

var a: foo<Action, PAYLOAD> = {
  [Action.ADD]: function({ commit }, payload): void {},
  [Action.DELETE]: function() {}
}

var b = {
  [Action.ADD]: function({ commit }, payload): void {},
  [Action.DELETE]: function() {}
}

export default class VueStore<IState, ICommitActionName = {}, IDispatchActionName = {}> {
  private state: IState
  private m_store: any
  constructor() {
    this.m_store = new Vuex.Store({})
  }

  commit<IPayload>(actionName: ICommitActionName, payload: IPayload, option: CommitOptions): void {
    this.m_store.commit(actionName, payload, option)
  }

  dispatch<IPayload, T>(actionName: IDispatchActionName, payload: IPayload, option: DispatchOptions): Promise<T> {
    return this.dispatch(actionName, payload, option)
  }
}
