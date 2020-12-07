/**
 * 判断类型
 * @param source 源
 * @param type 类型
 */
const is = (source: any, type: string) => {
    return Object.prototype.toString.call(source) == `[object ${type}]`
}

export default is