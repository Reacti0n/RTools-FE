/**
 * 过滤数组中的内容，返回唯一结果数组
 * @param collection 
 */
const unique = (collection: Array<any>): Array<any> => {
    return Array.from(new Set(collection))
}

export default unique