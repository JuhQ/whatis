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

export const createMethodList = ({ list, resultsIn }) =>
  list
    .reduce(
      (initial, key) => [
        ...initial,
        key,
        createMethodNameWithPresentTense(key),
      ],
      [],
    )
    .reduce(
      (initial, key) => ({
        ...initial,
        [key]: () => ({ in: resultsIn(key) }),
      }),
      {},
    )

export const createResultMethods = ({ list, methods }) => valueFrom =>
  list.reduce(
    (initial, key) => ({
      ...initial,
      [key]: methods[key](valueFrom),
      [createMethodNameWithPresentTense(key)]: methods[key](valueFrom),
    }),
    {},
  )

export const createMethodPairs = methods => valueFrom => () =>
  Object.keys(methods).reduce(
    (initial, key) => ({
      ...initial,
      [key]: methods[key],
      [createMethodNameWithPresentTense(key)]: methods[key],
    }),
    {},
  )[valueFrom]
