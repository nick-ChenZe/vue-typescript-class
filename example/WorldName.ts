import { VNode } from 'vue'
import VueComponent from '../src/component'

interface IWordNameProps {
  name: string
}

interface IWorldNameData {
  count: 0
}

export default class WorldNameComponent extends VueComponent<IWorldNameData, IWordNameProps> {
  constructor() {
    super()
  }

  render(h): VNode {
    return <div />
  }
}
