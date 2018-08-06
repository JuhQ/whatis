const consonants = 'bcdfghjklmnpqrstvxzwy'
const vowels = 'aeiouyw'

const last = str => str[str.length - 1]

const secondLast = str => str[str.length - 2]

const endsIn = (str, endChar) => last(str) === endChar

const createMethodNameWithPresentTense = key => {
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

const createMethodNamesWithValues = ({ list, method }) =>
  list.reduce(
    (initial, key) => ({
      ...initial,
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
