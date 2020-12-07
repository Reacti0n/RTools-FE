/**
 * 双击事件
 * @param func 回调函数
 * @param wait 两次双击的时间间隔
 */
const doubleClick = (func: Function, wait: number = 800) => {
    let index: number, startTime: number, endTime: number = 0
    return function (...params) {
        index = index === 0 ? 1 : index + 1
        if (index === 1) {
            startTime = new Date().getTime()
            setTimeout(() => {
                index = startTime = endTime = 0
            }, wait)
        } else if (index === 2) {
            endTime = new Date().getTime()
            if (endTime - startTime < wait) {
                func.apply(this, params)
            }
            index = startTime = endTime = 0
        }
    }
}

export default doubleClick