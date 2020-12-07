/**
 * 判断数组中是否存在某一个元素
 * @param source 
 * @param something 
 */
const has = (source: Array<any>, something: any): Boolean => {
    return source.indexOf(something) !== -1
}

export default has