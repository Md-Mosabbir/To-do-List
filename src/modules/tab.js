export class Inbox {
  constructor () {
    this.task = []
    this.finished = []
  }

  addTask (obj) {
    this.task.push(obj)
    console.log(this.task)
  }

  removeTask () {
    this.task.splice(0, 1)
  }

  finishTask () {
    const element = this.task.pop()
    this.finished.push(element)
    console.log(this.finished)
  }
}

export class Project {
  constructor () {
    this._projectArray = []
    this._finished = []
  }

  addingProjects () {
    const _projects = []
    this._projectArray.push(_projects)
    return _projects
  }

  addingTask (_projects, obj) {
    _projects.push(obj)
  }
}

export const inboxStorage = (function () {
  const inboxArray = new Inbox()

  return {
    addTask: function (task) {
      inboxArray.addTask(task)
    },
    getTask: function () {
      return inboxArray.task
    },
    removeTask: function () {
      inboxArray.removeTask()
      console.log(inboxArray)
    },
    finishTask: function () {
      inboxArray.finishTask()
      console.log(inboxArray)
    }
  }
})()