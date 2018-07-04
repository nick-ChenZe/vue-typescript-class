import { Commit } from 'vuex'
import Constants from './constants'
import IPayloadDefinition from './payloadDefinitions'

export default {
  [Constants.ADD]: function<S extends number, T>({ commit: Commit }, payload: IPayloadDefinition[S]): Promise<T> {
    return
  }
}
