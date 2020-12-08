/*
 * @2020 环物（上海）网络技术有限公司保留一切权利。
 * @Author: 陈鹏宇
 * @Review: Do not edit
 * @Tester: Do not edit
 * @Date: 2020-12-08 21:11:31
 * @LastAuthor: 陈鹏宇
 * @LastTime: 2020-12-08 21:15:03
 * @Description: 验证器接口
 */

 /**
 * 验证器
 */
declare interface iValidator {
    target: Object
    getRules(): Map<String, IValidatorRule>
    setRules(name: String, rule: IValidatorRule): void
    validate(): Boolean
}

/**
 * 验证器验证异常
 */
declare interface IValidatorException {
    msg: String,
}

/**
 * 验证器规则
 */
declare interface IValidatorRule {
    name?: String,
    rule: ValidatorRuleEnum,
    validate: (value: String, callback?: () => {}) => Boolean
}

/**
 * 验证器规则枚举
 */
declare enum ValidatorRuleEnum {
    eq = 0,
    gt,
    lt,
    isStr,
    isNumber,
    isEven,
    isOdd,
}
