/*
 * @2020 环物（上海）网络技术有限公司保留一切权利。
 * @Author: 陈鹏宇
 * @Review: Do not edit
 * @Tester: Do not edit
 * @Date: 2020-12-08 20:48:11
 * @LastAuthor: 陈鹏宇
 * @LastTime: 2020-12-08 21:39:13
 * @Description: 验证器
 */

/**
 * 验证器类
 */
class Validator implements iValidator {
    private rules: Map<String, IValidatorRule>;
    target: Object;

    constructor(target: Object) {
        this.rules = new Map<String, IValidatorRule>()
        this.target = target
    }

    validate(): Boolean {
        let isValidate: Boolean = false
        const hasKey: (key: String) => Boolean = (key: String) => {
            return Object.prototype.hasOwnProperty.call(this.target, key as string)
        }
        this.rules.forEach((rule, key) => {
            if (hasKey(key)) {
                rule.validate(this.target.[key])
            }
        });
        return isValidate
    }

    getRules(): Map<String, IValidatorRule> {
        return this.rules
    }

    setRules(name: String, rule: IValidatorRule) {
        rule.name = name
        this.rules.set(name, rule)
    }
}


export default Validator