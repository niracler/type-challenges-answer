/* _____________ 你的代码 _____________ */

type MyExclude<T, U> = T extends U ? never : T

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
    Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]
