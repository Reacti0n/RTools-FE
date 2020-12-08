/*
 * @2020 环物（上海）网络技术有限公司保留一切权利。
 * @Author: 陈鹏宇
 * @Review: Do not edit
 * @Tester: Do not edit
 * @Date: 2020-12-08 21:10:53
 * @LastAuthor: 陈鹏宇
 * @LastTime: 2020-12-08 21:39:30
 * @Description: 验证器规则
 */

const eqRule: IValidatorRule = {
    rule: ValidatorRuleEnum.eq,
    validate: (value: String, callback?: () => {}) => {
        return value === '24'
    }
}