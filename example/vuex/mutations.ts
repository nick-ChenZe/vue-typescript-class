import Constants from './constants'
import IPayloadDefinition from './payloadDefinitions'
import states from './states'

export default {
  [Constants.ADD]: function<T extends number>(state: typeof states, payload: IPayloadDefinition[T]) {}
}
