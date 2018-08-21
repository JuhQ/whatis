import {
  createMethodList,
  createMethodNameWithPresentTense,
  createMethodPairs,
  createResultMethods,
  createUniqueNames,
  endsIn,
  last,
  secondLast,
} from './helpers'

describe('helpers', () => {
  it('should get last character', () => {
    expect(last('hello')).toEqual('o')
  })

  it('should get second last character', () => {
    expect(secondLast('hello')).toEqual('l')
  })

  it('should end in correct character', () => {
    expect(endsIn('hello', 'o')).toEqual(true)
  })

  it('should create unique names', () => {
    expect(createUniqueNames({ key: 'hello', method: () => {} })).toEqual(null)
    expect(createUniqueNames({ key: 'millennium', method: () => {} })).toEqual({
      millennia: undefined,
    })
  })

  it('should create name with present tense', () => {
    expect(createMethodNameWithPresentTense('second')).toEqual('seconds')
    expect(createMethodNameWithPresentTense('century')).toEqual('centuries')
  })

  it('should create method list', () => {
    const time = ['planck', 'second']

    const timeMethods = {
      planck: () => {},
      second: () => {},
    }

    const resultsInTime = createResultMethods({
      list: time,
      methods: timeMethods,
    })

    expect(createMethodList({ list: time, resultsIn: resultsInTime })).toEqual(
      expect.objectContaining({
        planck: expect.any(Function),
        plancks: expect.any(Function),
        second: expect.any(Function),
        seconds: expect.any(Function),
      }),
    )
  })

  it('should create result methods', () => {
    const time = ['planck', 'second']

    const timeMethods = {
      planck: () => {},
      second: () => {},
    }

    const resultsInTime = createResultMethods({
      list: time,
      methods: timeMethods,
    })

    expect(resultsInTime()).toEqual({
      planck: undefined,
      plancks: undefined,
      second: undefined,
      seconds: undefined,
    })
  })

  it('should create method pairs', () => {
    expect(
      createMethodPairs({
        planck: null,
        second: null,
      })('second'),
    ).toBeDefined()
  })
})
