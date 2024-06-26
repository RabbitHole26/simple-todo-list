class Task {
  constructor(task) {
    this.id = Date.now()
    this.isLineThrough = false
    this.task = task
  }
}

export default Task