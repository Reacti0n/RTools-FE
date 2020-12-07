/**
 * 手机邮箱校验
 * @param account 账户
 * @param type phone | email
 */
const isValidMailPhone = (account: string, type: 'phone' | 'email' = 'phone'): Boolean => {
    const phoneReg: RegExp = /^1([0-9])\d{9}$/
    const emailReg: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/
    return type == 'phone' ? phoneReg.test(account) : emailReg.test(account)
}


export default isValidMailPhone