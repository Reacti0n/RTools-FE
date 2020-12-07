/**
 * 是否是函数
 * @param func 函数 
 */
const isFunction = (func: Function): Boolean => {
    return typeof func === 'function'
}

export default isFunction