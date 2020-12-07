/**
 * 是否是合法的 Hex 颜色值
 * @param value 需要判断的 Hex 字符串 
 * @return 合法 true、非法 false
 */
const isHexColor = function (value: string): boolean {
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
}

export default isHexColor