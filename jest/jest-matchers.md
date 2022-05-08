# Jest Matchers

Jest comes with many built-in matchers but many more can be added.


## List of Built-In Matchers

See https://jestjs.io/docs/next/expect for current list.

**Common Matchers**

- expect(value).toBe(value)
- expect(value).toBeDefined(value)
- expect(value).toEqual(value)
- expect(value).toBeFalsy()
- expect(value).toBeNull()
- expect(value).toBeTruthy()
- expect(value).toBeUndefined()
- expect(value).toStrictEqual(value)

**Number Matchers**

- expect(number).toBeCloseTo(number, numDigits?)
- expect(number).toBeGreaterThan(number | bigint)
- expect(number).toBeGreaterThanOrEqual(number | bigint)
- expect(number).toBeLessThan(number | bigint)
- expect(number).toBeLessThanOrEqual(number | bigint)
- expect(number).toBeNaN()

**String Matchers**

- expect(string).toMatch(regexp | string)
- expect(string).toHaveLength(number)

**Array Matchers**

- expect(array).toEqual(array)
- expect(array).toHaveLength(number)

**Iterables Matchers**

- expect(iterable).toContain(item)

**Object Matchers**

- expect(object).toEqual(object)
- expect(object).toHaveProperty(keyPath, value?)
- expect(object).toMatchObject(object)

**Error Matchers**

- except(function).toThrow()
- except(function).toThrow(error)
- except(function).toThrow(string)
- except(function).toThrow(regexp)
- except(function).toThrowErrorMatchingSnapshot(hint?)
- except(function).toThrowErrorMatchingInlineSnapshot(inlineSnapshot)

**Function Matchers**

- expect(function).toHaveBeenCalled()
- expect(function).toHaveBeenCalledTimes(number)
- expect(function).toHaveBeenCalledWith(arg1, arg2, ...)
- expect(function).toHaveBeenLastCalledWith(arg1, arg2, ...)
- expect(function).toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)
- expect(function).toHaveReturned()
- expect(function).toHaveReturnedTimes(number)
- expect(function).toHaveReturnedWith(value)
- expect(function).toHaveLastReturnedWith(value)
- expect(function).toHaveNthReturnedWith(nthCall, value)


## `jest-extended`

[jest-extended](https://www.npmjs.com/package/jest-extended) aims to add additional matchers to Jest's default ones making it easy to test everything.


## `@testing-library/jest-dom`

`[@testing-library/jest-dom`](https://www.npmjs.com/package/@testing-library/jest-dom) provides a set of DOM related custom jest matchers that you can use to extend jest.
