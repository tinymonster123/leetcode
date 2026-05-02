const PENDING = "pending"
const FULLFILLED = "fullfilled"
const REJECTED = "rejected"

class MyPromise {
    constructor(executor) {
        // 状态
        this.state = PENDING
        // 值
        this.value = undefined
        // 报错原因
        this.reason = undefined

        // 正确执行函数的数组
        this.fullfilledCallbacks = []
        // 报错执行函数的数组
        this.rejectedCallbacks = []

        const resolve = (value) => {
            if (this.state === PENDING) {
                this.state = FULLFILLED
                this.value = value
                // 依次执行
                this.fullfilledCallbacks.forEach(fn => fn())
            }
        }

        const reject = (reason) => {
            if (this.state === PENDING) {
                this.state = REJECTED
                this.reason = reason
                // 依次执行
                this.rejectedCallbacks.forEach(fn => fn())
            }
        }

        // 同步执行函数
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    then(onFullfilled, onRejected) {
        const onFullfilled = typeof onFullfilled === "function" ? onFullfilled : value => value
        const onRejected = typeof onRejected === "function" ? onRejected : reason => { throw reason }

        // 返回的必须是一个 Promise
        // resolve, reject 和 onFullfilled, onRejected 的区别
        // resolve, reject 是官方提供的状态控制引擎
        // onFullfilled, onRejected 是用户提供的回调函数，在 fullfilled 或者 rejected 状态下的回调函数
        // 所以在 promiseNext 中不能用 onFullfilled, onRejected 替代 resolve, rejected
        // 因为一个是负责状态流转，一个是用户自定义的特定状态时的回调
        const promiseNext = new MyPromise((resolve, reject) => {
            const handleMicroTask = (callback, data) => {
                // 使用 setTimeout 模拟微队列
                setTimeout(() => {
                    try {
                        const newVal = callback(data)
                        this.resolvePromise(promiseNext, newVal, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            }

            // 对不同状态进行处理
            if (this.state === FULLFILLED) {
                handleMicroTask(onFullfilled, this.value)
            } else if (this.state === REJECTED) {
                handleMicroTask(onRejected, this.reason)
            } else if (this.state === PENDING) {
                // 如果对于异步任务，状态没有变的情况，把回调先存起来
                this.fullfilledCallbacks.push(() => handleMicroTask(onFullfilled, this.value))
                this.rejectedCallbacks.push(() => handleMicroTask(onRejected, this.reason))
            }
        })

        return promiseNext
    }

    // catch 其实是 then 的语法躺，只处理 rejected 状态
    catch(onRejected) {
        // 加 return 是为了保证链式调用不断裂
        return this.then(null, onRejected)
    }

    resolvePromise(promiseNext, newVal, resolve, reject) {
        // 防止陷入调用链
        if (promiseNext === newVal) {
            return reject('Error')
        }

        // 如果 newVal 是 MyPromise 的一个新实例，递归解析
        if (newVal instanceof MyPromise) {
            newVal.then(
                newNextVal => this.resolvePromise(promise2, newNextVal, resolve, reject),
                reason => reject(reason)
            )
        } else {
            // 如果只是一个普通类型，直接返回
            resolve(newVal)
        }
    }
}