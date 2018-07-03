import { VNode } from 'vue'
import VueComponent from '../src/component'

interface IWordNameProps {
  name: string
}

export default class WorldNameComponent extends VueComponent<{}, IWordNameProps> {
  constructor() {
    super()
  }

  render(h): VNode {
    return
  }
}
