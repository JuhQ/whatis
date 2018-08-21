const consonants = 'bcdfghjklmnpqrstvxzwy'
const vowels = 'aeiouyw'

export const last = str => str[str.length - 1]

export const secondLast = str => str[str.length - 2]

export const endsIn = (str, endChar) => last(str) === endChar

export const createMethodNameWithPresentTense = key => {
  const secondLastLetter = secondLast(key)

  if (
    consonants.includes(secondLastLetter) &&
    !vowels.includes(secondLastLetter) &&
    endsIn(key, 'y')
  ) {
    return key.replace(/y$/, 'ies')
  }

  return `${key}s`
}

export const createUniqueNames = ({ key, method }) =>
  key === 'millennium' ? { millennia: method(key) } : null

const createMethodNamesWithValues = ({ list, method }) =>
  list.reduce(
    (initial, key) => ({
      ...initial,
      ...createUniqueNames({ key, method }),
      [key]: method(key),
      [createMethodNameWithPresentTense(key)]: method(key),
    }),
    {},
  )

export const createMethodList = ({ list, resultsIn }) =>
  createMethodNamesWithValues({
    list,
    method: key => () => ({ in: resultsIn(key) }),
  })

export const createResultMethods = ({ list, methods }) => valueFrom =>
  createMethodNamesWithValues({
    list,
    method: key => methods[key](valueFrom),
  })

export const createMethodPairs = methods => valueFrom => () =>
  createMethodNamesWithValues({
    list: Object.keys(methods),
    method: key => methods[key],
  })[valueFrom]
