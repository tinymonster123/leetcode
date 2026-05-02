### 题目：实现一个带并发限制的异步调度器 `Scheduler`

**【需求描述】**
请实现一个具有并发限制的异步任务调度器 `Scheduler`。
要求：
1. `Scheduler` 可以通过实例化时传入的参数来控制最大并发任务数。
2. 包含一个 `add` 方法，接收一个返回 Promise 的函数作为参数。
3. 当且仅当当前正在执行的任务数小于最大并发数时，立即执行新添加的任务；否则，新任务需进入等待队列。
4. 一旦有任务执行完毕，自动从等待队列中取出最早加入的任务执行。

**【代码模板与测试用例】**
请完善下方 `Scheduler` 类中的代码，使得后续的测试用例能够按照期望的顺序和时间打印结果。

```javascript
// 题目给定的代码骨架
class Scheduler {
  constructor(limit) {
    // ... 你的代码 ...
  }
  
  add(promiseCreator) {
    // ... 你的代码 ...
  }
}

// 模拟异步请求的辅助函数
const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

// 实例化调度器，限制并发数为 2
const scheduler = new Scheduler(2)

// 辅助函数：添加任务并绑定 then 回调
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

// 开始连续添加任务
addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

/*
【期望的打印结果与时间轴】
一开始，任务 1 和任务 2 占据了两个并发名额，开始执行。
500ms 时，任务 2 完成，打印 "2"；任务 3 填补空缺开始执行。
800ms 时，任务 3 完成，打印 "3"；任务 4 填补空缺开始执行。
1000ms 时，任务 1 完成，打印 "1"。
1200ms 时，任务 4 完成，打印 "4"。

最终控制台依次输出:
2
3
1
4
*/
```

***