import VueAbstractComponent from '../../src/abstractComponent'

export interface IScrollable {
  height: number
}

export default class Scrollable extends VueAbstractComponent implements IScrollable {
  constructor() {}
}
