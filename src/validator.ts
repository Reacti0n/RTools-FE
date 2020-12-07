
/**
 * 验证器
 */
interface iValidator {
    target: Object
    getRules(): Set<IValidatorRule>
    setRules(rule: IValidatorRule): void
    validate(): Boolean
}

/**
 * 验证器验证异常
 */
interface IValidatorException {
    msg: String,
}

/**
 * 验证器规则
 */
interface IValidatorRule {
    name: String,
    rule: ValidatorRuleEnum
}

enum ValidatorRuleEnum {
    eq = 0,
    gt,
    lt,
    isStr,
    isNumber,
    isEven,
    isOdd,
}

class Validator implements iValidator {
    private rules: Set<IValidatorRule>;
    target: Object;

    constructor(target: Object) {
        this.rules = new Set<IValidatorRule>()
        this.target = target
    }

    validate(): Boolean {
        for (const key in this.target) {
            if (Object.prototype.hasOwnProperty.call(this.target, key)) {
                // 校验
                this.rules[key].validate()
            }
        }
    }

    getRules(): Set<IValidatorRule> {
        return this.rules
    }

    setRules(rule: IValidatorRule) {
        this.rules.add(rule)
    }
}


export default Validator