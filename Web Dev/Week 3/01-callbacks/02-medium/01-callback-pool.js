// Problem Description – Asynchronous Worker Pool
//
// You are required to create a worker pool that manages the execution
// of asynchronous tasks.
// The pool should ensure that no more than N tasks are running concurrently,
// while any additional tasks are queued.
// As tasks complete, queued tasks should start automatically.
// Each task must invoke its callback with its result when finished.

class CallbackPool {
  constructor(limit) {
    this.taskLimit = limit;
    this.activeTask = 0;
    this.taskQueue = [];
  }

  run(task, onComplete) {
    if (this.activeTask < this.taskLimit) {
      onComplete();
    } else {
      this.taskQueue.push(task);
    }
  }

  // _next(onComplete) {
  //   if (this.taskQueue.length > 0 && this.activeTask < this.taskLimit) {
  //     const nextTask = this.taskQueue.shift();
  //     onComplete(nextTask);
  //   }
  // }
}

module.exports = CallbackPool;
