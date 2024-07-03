import Task from "../classes/Task/Task"

function createTask(task) {
  return typeof task === 'string'
      ? (
        new Task(task)
      )
      : (
        console.log(`createTask() accepts only string as argument.`)
      )
}

export default createTask