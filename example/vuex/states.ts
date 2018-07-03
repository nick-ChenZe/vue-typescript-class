interface ITodo {
  name: string
  status: boolean
  index: number
}

export interface IState {
  todos: ITodo[]
}

export default {
  todos: []
}
