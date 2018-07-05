import Vuex, { CommitOptions, DispatchOptions, ActionContext } from 'vuex'

/**
 * eg:
 *
 * enum ActionEnum {
 *   ADD = 'ADD',
 *   DELETE = 'DELETE'
 * }
 *
 * interface IPayload {
 *   [ActionEnum.ADD]: { id: number; name: string }
 *   [ActionEnum.DELETE]: { id: number }
 * }
 *
 * const state = {
 *   todos: []
 * }
 *
 * declare type Actions<T, M extends Extract<keyof T, string>> = { [Key in M]: (context: ActionContext<typeof state, {}>, payload: T[Key]) => void }
 *
 * const actions: Actions<IPayload, keyof IPayload> = {
 *   [ActionEnum.ADD]: function({ commit }, payload): void {
 *     commit(ActionEnum.ADD, payload.id)
 *   },
 *   [ActionEnum.DELETE]: function({ commit }, payload): void {
 *     commit(ActionEnum.DELETE, payload.id)
 *   }
 * }
 */

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
