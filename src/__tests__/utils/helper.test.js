import { capitalize } from '../../utils/helper'

test('capitalize should work with undefined values', () => {
    expect(capitalize(undefined)).toBe('')
})

test('capitalize should work with null values', () => {
    expect(capitalize(null)).toBe('')
})

test('capitalize should work with string values', () => {
    expect(capitalize('akash')).toBe('Akash')
    expect(capitalize('Akash')).toBe('Akash')
    expect(capitalize('A')).toBe('A')
    expect(capitalize('AA')).toBe('AA')
    expect(capitalize(' ')).toBe(' ')
    expect(capitalize('akash bhardwaj')).toBe('Akash bhardwaj')
    expect(capitalize('Akash Bhardwaj')).toBe('Akash Bhardwaj')
})
