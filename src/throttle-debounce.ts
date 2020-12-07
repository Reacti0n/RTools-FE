export interface ThrottleOptions {
    /**
     * 是否立即调用
     */
    start?: boolean
    /**
     * 阈值
     */
    middle?: boolean
    /**
     * 只执行一次
     */
    once?: boolean
}

/**
 * 节流接口
 */
interface Throttler<T extends unknown[]> {
    (...args: T): void
    cancel(): void
}

/**
 * 节流
 * @param callback 回调函数
 * @param wait 阈值
 * @param param2 参数
 */
export function throttle<T extends unknown[]>(
    callback: (...args: T) => unknown,
    wait = 0,
    { start = true, middle = true, once = false }: ThrottleOptions = {}
): Throttler<T> {
    let last = 0
    let timer: number | undefined | NodeJS.Timeout
    let cancelled = false
    function fn(this: unknown, ...args: T) {
        if (cancelled) return
        const delta = Date.now() - last
        last = Date.now()
        if (start) {
            start = false
            callback.apply(this, args)
            if (once) fn.cancel()
        } else if ((middle && delta < wait) || !middle) {
            clearTimeout(timer as NodeJS.Timeout)
            timer = setTimeout(
                () => {
                    last = Date.now()
                    callback.apply(this, args)
                    if (once) fn.cancel()
                },
                !middle ? wait : wait - delta
            )
        }
    }
    fn.cancel = () => {
        clearTimeout(timer as NodeJS.Timeout)
        cancelled = true
    }
    return fn
}

/**
 * 防抖
 * @param callback 回调函数
 * @param wait 等待时长
 * @param param2 参数
 */
export function debounce<T extends unknown[]>(
    callback: (...args: T) => unknown,
    wait = 0,
    { start = false, middle = false, once = false }: ThrottleOptions = {}
): Throttler<T> {
    return throttle(callback, wait, { start, middle, once })
}