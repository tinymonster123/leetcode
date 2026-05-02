class PromiseScheduler {
    private limit: number = 2
    private running: number = 0
    private queue: any[] = []


    constructor(limit: number) {
        this.limit = limit
    }

    add(task: any) {
        return new Promise((res, rej) => {
            this.queue.push(() => {
                return task().then(res).catch(rej)
            })
            this.run()
        })
    }

    run() {
        while (this.running < this.limit && this.queue.length > 0) {
            const task = this.queue.shift()
            this.running++
            task().finally(() => {
                this.running--
                this.run()
            })
        }
    }
}

// 模拟一个异步任务，延迟 delay 毫秒后返回任务编号
// const timeout = (time: number) => new Promise(resolve => setTimeout(resolve, time));

// const promiseScheduler = new PromiseScheduler(2); // 限制并发为 2

// const addTask = (time: number, order: string) => {
//     promiseScheduler.add(() => timeout(time)).then(() => console.log(order));
// };

// // 立即添加 4 个任务
// addTask(1000, '1');
// addTask(500, '2');
// addTask(300, '3');
// addTask(400, '4');