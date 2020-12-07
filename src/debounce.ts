/**
 * 可配置防抖函数
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */
const debounce = function (func: Function, wait: number = 1000, immediate: Boolean = true): Function {
    let timer: any, context: any, args: any
    const later = () => {
        setTimeout(() => {
            if (!immediate) {
                func.apply(context, args)
                context = args = null
            }
        }, wait);
    }
    return function (...params) {
        if (!timer) {
            timer = later()
            if (immediate) {
                func.apply(this, params)
            } else {
                context = this
                args = params
            }
        } else {
            clearTimeout(timer)
            timer = later()
        }
    }
}

export default debounce